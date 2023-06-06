import shutil
from distutils.dir_util import copy_tree
import os

# Copies over the docs folder from `apache/druid` to `druid-website-src into the version for it, e.g. druid-website-src/docs/26.0.0`
# Prompts the user on whether or not this is the highest available version for download. If yes, also copies the docs to `druid-website-src/docs/latest`
# Copies over sidebars and redirects
# Replaces {{DRUIDVERSION}} in the markdown files with the druid version you specify for the variable

#Update this to the Druid version you are releasing
druid_version = "26.0.0"

druid_variable = "{{DRUIDVERSION}}"


# Doc directories for apache/druid (source) and website-src (destination). Assumes they're peers
# Make sure you have the correct  branch checked out for `apache/druid`
source_directory = "../../../my-druid-fork/docs"
destination_directory = f"../../docs/{druid_version}"
destination_directory_latest = "../../docs/latest"

# Copies the docs
copy_tree(source_directory,destination_directory)

# deletes the _bin directory that's not needed
shutil.rmtree(f"{destination_directory}/_bin")

# Copy sidebars.json and redirects.json
shutil.copyfile("../../../druid/website/sidebars.json","../../sidebars.json")
shutil.copyfile("../../../druid/website/redirects.json","../../redirects.js")


# Find/replace {{DRUIDVERSION}} with the actual version
def replace_text_in_file(destination_directory, druid_variable, druid_version):
    with open(destination_directory, 'r') as file:
        file_content = file.read()

    modified_content = file_content.replace(druid_variable, druid_version)

    with open(destination_directory, 'w') as file:
        file.write(modified_content)

def do_the_replace(file_path, druid_variable, druid_version):
    for item in os.listdir(file_path):
        item_path = os.path.join(file_path, item)

        # If the item is a file and has a markdown extension
        if os.path.isfile(item_path) and item_path.lower().endswith(".md"):
            replace_text_in_file(item_path, druid_variable, druid_version)

        # If the item is a file and has a markdownx extension
        if os.path.isfile(item_path) and item_path.lower().endswith(".mdx"):
            replace_text_in_file(item_path, druid_variable, druid_version)

        # If the item is a directory, recursively process its contents
        elif os.path.isdir(item_path):
            do_the_replace(item_path, druid_variable, druid_version)


do_the_replace(destination_directory, druid_variable, druid_version)

def is_it_latest():

  is_latest = input("Is this version going to be the highest version available for download? If yes, the docs will also be used for 'latest'. (y/n)").lower()

  if is_latest == 'y':
      print("Also copying the docs to docs/latest.")
      copy_tree(source_directory,destination_directory_latest)
      shutil.rmtree(f"{destination_directory_latest}/_bin")
      do_the_replace(destination_directory_latest,druid_variable,druid_version)
  elif is_latest == 'n':
      print("Not copying the docs to docs/latest")
  else:
      print("Enter y or n to make a choice")

is_it_latest()