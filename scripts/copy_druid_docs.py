import shutil
from distutils.dir_util import copy_tree
import os

"""
# Copies over the docs folder from `apache/druid` to `druid-website-src into the version for it, e.g. druid-website-src/docs/26.0.0`
# Prompts the user on whether or not this is the highest available version for download. If yes, also copies the docs to `druid-website-src/docs/latest`
# Copies over sidebars and redirects
# Replaces {{DRUIDVERSION}} in the markdown files with the druid version you specify for the variable
"""

druid_variable = "{{DRUIDVERSION}}"

# Make sure you have the correct branch checked out for `apache/druid`
# The directory structure should have apache/druid and apache/druid-website-src as peers
# Set source_directory to your OSS Druid repo
source_directory = "../../druid/"
if not os.path.exists(source_directory):
    import sys
    sys.exit("Please supply a valid path for source_directory in copy_druid_docs.py")

# Find/replace {{DRUIDVERSION}} with the actual version
def replace_text_in_file(destination_directory, druid_version):
    with open(destination_directory, 'r') as file:
        file_content = file.read()

    modified_content = file_content.replace(druid_variable, druid_version)

    with open(destination_directory, 'w') as file:
        file.write(modified_content)

def do_the_replace(file_path, druid_version):
    for item in os.listdir(file_path):
        item_path = os.path.join(file_path, item)

        # If the item is a file and has a markdown extension
        if os.path.isfile(item_path) and item_path.lower().endswith(".md"):
            replace_text_in_file(item_path, druid_version)

        # If the item is a file and has a markdownx extension
        if os.path.isfile(item_path) and item_path.lower().endswith(".mdx"):
            replace_text_in_file(item_path, druid_version)

        # If the item is a directory, recursively process its contents
        elif os.path.isdir(item_path):
            do_the_replace(item_path, druid_version)

def is_it_latest(druid_version, destination_directory_latest):

  is_latest = input(f"Is {druid_version} going to be the highest version available for download? If yes, the docs will also be used for 'latest'. (y/n) ").lower()

  if is_latest == 'y':
      print("Also copying the docs to docs/latest.")
      copy_tree(source_directory+'docs', destination_directory_latest)
      shutil.rmtree(f"{destination_directory_latest}/_bin")
      do_the_replace(destination_directory_latest, druid_version)
  elif is_latest == 'n':
      print("Not copying the docs to docs/latest")
  else:
      print("Enter y or n to make a choice")


def main(druid_version):


    # The destination_directory should be druid-website-src/docs/VERSION
    destination_directory = f"../docs/{druid_version}"
    destination_directory_latest = "../docs/latest"

    # Copies the docs
    copy_tree(source_directory+"docs",destination_directory)

    # deletes the _bin directory that's not needed
    shutil.rmtree(f"{destination_directory}/_bin")

    # Copy sidebars.json and redirects.json
    shutil.copyfile(source_directory+"website/sidebars.json","../sidebars.json")
    shutil.copyfile(source_directory+"website/redirects.js","../redirects.js")

    do_the_replace(destination_directory, druid_version)

    is_it_latest(druid_version, destination_directory_latest)

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()

    parser.add_argument("-v", "--version", required=True,
                        help="Version to copy. Do not include 'latest'. "
                        "For example: -v 26.0.0")
    args = parser.parse_args()

    main(args.version)
