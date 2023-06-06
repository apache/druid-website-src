import shutil
from distutils.dir_util import copy_tree
import os

# Copies over the docs folder from `apache/druid` to `druid-website-src`
# Copies over sidebars and redirects
# Replaces {{DRUIDVERSION}} in the markdown files with the druid version you specify for the variable


druid_version = "26.0.0"
druid_variable = "{{DRUIDVERSION}}"


# Doc directories for apache/druid (source) and website-src (destination). Assumes they're peers
source_directory = "../../../druid/docs"
destination_directory = f"../../docs/{druid_version}"

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

def do_the_replace(directory_path, druid_variable, druid_version):
    for item in os.listdir(directory_path):
        item_path = os.path.join(directory_path, item)

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

