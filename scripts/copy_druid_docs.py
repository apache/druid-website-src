import os
import shutil
import subprocess

"""
copy_druid_docs.py does the following:

1. Copies over the docs folder from `apache/druid` to `druid-website-src into
   the version for it, e.g. druid-website-src/docs/26.0.0`

2. Copies over sidebars and redirects.

3. Replaces {{DRUIDVERSION}} in the Markdown files with the Druid version
   you specify in the command line.

4. Prompts the user on whether or not this is the highest available version
   for download. If yes, also copies the docs to `druid-website-src/docs/latest`

To use this as a standalone script, call it like:
python copy_druid_docs.py -v 26.0.0
"""

druid_variable = "{{DRUIDVERSION}}"

def check_source(source_directory):
    """
    Set source_directory to your OSS Druid repo.
    The default directory structure assumes apache/druid and apache/druid-website-src are peers.
    To pass in a non-default directory, use the --source flag or pass it into main()
    """

    is_valid = True
    error_msg = ""

    # Verify that the directory exists
    full_path_source = os.path.abspath(source_directory)
    print(f"\nChecking docs source from the following:\nRepo:\t'{full_path_source}'")
    if not os.path.exists(source_directory):
        is_valid = False
        error_msg = "Error: Supply a valid path for apache/druid in the '--source' flag"
        return is_valid, error_msg

    # Get the current branch of the source directory (apache/druid)
    branch_result = subprocess.run(["git", "rev-parse", "--abbrev-ref", "HEAD"], cwd=source_directory, capture_output=True)
    current_branch = branch_result.stdout.decode('ascii').strip()

    # Print information about the branch
    print(f"Branch:\t'{current_branch}'\n")

    # Verify source directory and its branch
    correct_branch = input("Is the listed docs source correct? (y/n) ").lower()
    if correct_branch == 'n':
        is_valid = False
        error_msg = "Error: Supply the correct repo for --source and check out the correct branch."

    return is_valid, error_msg

def replace_text_in_file(destination_directory, druid_version):
    """
    Find/replace {{DRUIDVERSION}} with the actual version
    """

    with open(destination_directory, 'r') as file:
        file_content = file.read()

    modified_content = file_content.replace(druid_variable, druid_version)

    with open(destination_directory, 'w') as file:
        file.write(modified_content)

def do_the_replace(file_path, druid_version):
    for item in os.listdir(file_path):
        item_path = os.path.join(file_path, item)

        # If the item is a file and has a markdown extension
        if os.path.isfile(item_path) and (item_path.lower().endswith(".md") or item_path.lower().endswith(".mdx")):
            replace_text_in_file(item_path, druid_version)

        # If the item is a directory, recursively process its contents
        elif os.path.isdir(item_path):
            do_the_replace(item_path, druid_version)

def is_it_latest(druid_version, source_directory, destination_directory_latest):
    is_latest = input(f"Is {druid_version} going to be the highest version available for download? If yes, the docs will also be used for 'latest'. (y/n) ").lower()

    if is_latest == 'y':
        print("Also copying the docs to docs/latest.")
        subprocess.run(["rsync", "--delete", "--recursive", f"{source_directory}/docs/", destination_directory_latest])
        if os.path.exists(f"{destination_directory_latest}/_bin"):
<<<<<<< 29.0.0-and-29.0.1 -- Incoming Change
            shutil.rmtree(f"{destination_directory_latest}/_bin")
=======
          shutil.rmtree(f"{destination_directory_latest}/_bin")
>>>>>>> master -- Current Change
        do_the_replace(destination_directory_latest, druid_version)
    elif is_latest == 'n':
        print("Not copying the docs to docs/latest")
    else:
        print("Enter y or n to make a choice")

def main(druid_version, source_directory="../../druid"):
    is_valid, error_msg = check_source(source_directory)
    if not is_valid:
        quit(error_msg + "\n")

    # The destination_directory should be druid-website-src/docs/VERSION
    destination_directory = f"../docs/{druid_version}"
    destination_directory_latest = "../docs/latest"

    # Copies the docs
    subprocess.run(["rsync", "--delete", "--recursive", f"{source_directory}/docs/", destination_directory])

    # deletes the _bin directory that's not needed
    if os.path.exists(f"{destination_directory_latest}/_bin"):
<<<<<<< 29.0.0-and-29.0.1 -- Incoming Change
      shutil.rmtree(f"{destination_directory_latest}/_bin")    

=======
      shutil.rmtree(f"{destination_directory_latest}/_bin")
>>>>>>> master -- Current Change
    # Copy sidebars.json and redirects.json
    shutil.copyfile(source_directory+"/website/sidebars.json", "../sidebars.json")
    shutil.copyfile(source_directory+"/website/redirects.js", "../redirects.js")

    # Copies the data folder from the root of druid-website-src
    # into published_versions so
    subprocess.run(["rsync", "--delete", "--recursive", "../data", "../published_versions/"])

    do_the_replace(destination_directory, druid_version)

    is_it_latest(druid_version, source_directory, destination_directory_latest)

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()

    parser.add_argument("-v", "--version", required=True,
                        help="Version to copy. Do not include 'latest'. "
                        "For example: -v 26.0.0")

    parser.add_argument("-s", "--source", default="../../druid",
                        help="The apache/druid folder to use as docs source.")

    args = parser.parse_args()

    main(args.version, args.source)
