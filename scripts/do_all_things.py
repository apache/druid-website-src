import copy_druid_docs
import build_docs
import shutil

# Example: python do_all_things.py -v 26.0.0

def main(versions, no_docs, source, skip_install, use_yarn):

    # if we want to update docs, copy over from apache/druid
    if not no_docs:
        copy_druid_docs.main(versions, source)

        # build all specified versions of the docs
        build_docs.main([versions, "latest"], skip_install, use_yarn)

    # if we don't want to update docs, just build latest
    else:
        build_docs.main(["latest"], skip_install, use_yarn)

    print("Copying build output to ../published_versions. Use that directory to publish the site.")
    shutil.copytree('build','published_versions', dirs_exist_ok=True)

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()

    parser.add_argument("-v", "--version",
                        help="Version to copy and build. Do not include 'latest'"
                        " since it's already accounted for. "
                        "For example: -v 26.0.0")

    parser.add_argument("--no-docs", default=False,
                        help="Set this option if you ONLY want to update "
                        "non-docs pages, such as the home page.",
                        action='store_true')

    parser.add_argument("-s", "--source", default="../../druid",
                        help="The apache/druid folder to use as docs source.")

    parser.add_argument("--skip-install", default=False,
                        help="Skip the Docusaurus 2 installation",
                        action='store_true')

    parser.add_argument("--yarn", default=False,
                        help="Use yarn to install and build instead of npm",
                        action='store_true')

    args = parser.parse_args()

    # you can only skip the --version flag if no-docs is True
    # when no-docs is False, --version is required
    if not args.no_docs and not args.version:
        parser.error("--version is required when --no-docs is False")

    main(args.version, args.no_docs, args.source, args.skip_install, args.yarn)

