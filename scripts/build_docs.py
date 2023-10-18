#!/usr/bin/python


"""
build-docs.py

Version:        6 June 2023

Purpose:        Build the OSS Druid Docusaurus 2 docs for all
                versions supplied in the [-v, --versions] flag.
                Versions aside from "latest" only retain content
                from the docs folder. The "latest" version keeps
                everything. Assumes script is called from
                `druid-website-src/static/build-scripts` directory.

Help:           python build-docs.py --help

Example call:   python build-docs.py -v latest 26.0.0

"""

import fileinput
import os
import re
import shutil
import subprocess
import sys

def build_docs(versions, use_yarn):

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
        shutil.rmtree(f"published_versions/docs/{v}", ignore_errors=True) 
        # build the docs
        if not use_yarn:
            subprocess.run(["npm", "run", "build"])
        else:
            subprocess.run(["yarn", "build"])

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

    # after all version builds, rename the temp directory back to "build"
    shutil.rmtree(source_dir)
    shutil.move(destination_dir, source_dir)

def main(versions, skip_install, use_yarn):

    # from druid-website-src/static/build-scripts,
    # move to druid-website-src to run the npm commands
    os.chdir("../")

    # sort to build "latest" last
    versions = sorted(versions)

    # install docusaurus 2
    if not skip_install:
        print("Installing Docusaurus 2...")

        if not use_yarn:
            subprocess.run(["npm", "install"])
        else:
            subprocess.run(["yarn", "install"])

    # remove the old build directory
    shutil.rmtree('build', ignore_errors=True)
    # do the actual builds
    build_docs(versions, use_yarn)

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()

    parser.add_argument("-v", "--versions", required=True, nargs='+',
                        help="One or more versions to build. "
                        "For example: -v latest 26.0.0")

    parser.add_argument("--skip-install",
                        help="Skip the Docusaurus 2 installation",
                        action='store_true')

    parser.add_argument("--yarn", default=False,
                        help="Use yarn to install and build instead of npm",
                        action='store_true')

    args = parser.parse_args()

    main(args.versions, args.skip_install, args.yarn)

