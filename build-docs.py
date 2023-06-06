#!/usr/bin/python

"""
build-docs.py

Version:        5 June 2023

Purpose:        Build the OSS Druid Docusaurus 2 docs for all
                versions supplied in the [-v, --versions] flag.
                Versions aside from "latest" only retain content
                from the docs folder. The "latest" version keeps
                everything.

Assumes:        - Script called from the TBD directory
                - You have already installed the site using
                  "yarn install" or "npm run install"

Help:           python build-docs.py --help

Example call:   python build-docs.py -v latest 26.0.0

"""

import fileinput
import os
import re
import shutil
import subprocess
import sys

def build_docs(versions):

    for v in versions:
        print(f"Building the docs for version '{v}'...")

        # replace "latest" in redirects to the appropriate version
        if v != "latest":
            for line in fileinput.input("redirects.js", inplace=1):
                print(line.replace("/latest/", f"/{v}/"), end='')

        # set the version in "buildVersion" variable in docusaurus.config.js
        replacement = f'var buildVersion = "{v}";'
        for line in fileinput.input("docusaurus.config.js", inplace=1):
            print(re.sub(r"^var buildVersion.*", replacement, line), end='')

        # build the docs
        subprocess.run(["npm", "run", "build"])

        # move output to temporary directory since docusaurus 2
        # overwrites build directory with each build.
        # the "latest" version is built last to maintain
        # all the non-docs content for latest
        source_dir = "build"
        destination_dir = "build__temp"
        if not os.path.isdir(source_dir):
            sys.exit("ERROR: The docs were not built. Check Docusaurus logs.")
        shutil.copytree(source_dir, destination_dir, dirs_exist_ok=True)

        # restore the redirect file back to URLs with "latest"
        #subprocess.run(["git", "restore", "redirects.js"])
        if v != "latest":
            for line in fileinput.input("redirects.js", inplace=1):
                print(line.replace(f"/{v}/", "/latest/"), end='')

#    # after all version builds, rename the temp directory back to "build"
#    shutil.move(destination_dir, source_dir)

def main():
    import argparse
    parser = argparse.ArgumentParser()

    parser.add_argument("-v", "--versions", required=True, nargs='+',
                        help="One or more versions to build. "
                        "For example: -v latest 26.0.0")

    args = parser.parse_args()

    # sort to build "latest" last
    versions = sorted(args.versions)

#    # install docusaurus 2
#    print("Installing Docusaurus 2...")
#    subprocess.run(["npm", "install"])

    build_docs(versions)

if __name__ == "__main__":
    main()

