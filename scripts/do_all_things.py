import copy_druid_docs
import build_docs
import shutil

# Example: python do_all_things.py -v 26.0.0

def main(versions, skip_install, use_yarn):

    # copy the docs from apache/druid
    copy_druid_docs.main(args.version)

    # build all specified versions of the docs
    build_docs.main([args.version, "latest"], skip_install, use_yarn)

    print("Copying build output to ./published_versions. Use that directory to publish the site.")
    shutil.copytree('build','published_versions', dirs_exist_ok=True)

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()

    parser.add_argument("-v", "--version", required=True,
                        help="Version to copy and build. Do not include 'latest'"
                        " since it's already accounted for. "
                        "For example: -v 26.0.0")

    parser.add_argument("--skip-install", default=False,
                        help="Skip the Docusaurus 2 installation",
                        action='store_true')

    parser.add_argument("--yarn", default=False,
                        help="Use yarn to install and build instead of npm",
                        action='store_true')

    args = parser.parse_args()

    main(args.version, args.skip_install, args.yarn)

