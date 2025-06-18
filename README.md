# Druid project website

https://druid.apache.org/

This repo is used to build the Apache Druid website. It is the source of truth for website pages such as the website homepage and pages like Community.

A different repo houses the source of truth for the following:
* Markdown files for `docs` 
* the sidebar file
* the redirects file

For those, see [`apache/druid`](https://github.com/apache/druid/). 

The target repo for the website when you're ready to publish is [`druid-website`](https://github.com/apache/druid-website).

When publishing, build the site and then copy the contents of `build` to the `druid-website` repo. Make sure you do not accidentally delete the contents of `docs` in `druid-website`.

## Updating homepage widgets

If you need to update the contents of Upcoming Events, Featured Content or Latest releases widgets, you can find them in `static/js`:

- `EventList.js` (rendered by `EventsWidget.js`)
- `FeaturedContent.js` (rendered by `FeaturedContentWidget.js`)
- `version.js` (rendered by `RecentReleasesWidget.js`)

If you only need to update the homepage widgets,  use the `--no-docs` flag (as shown in example 5) to build the site. This uses the existing docs in `latest` and only builds `latest`, which is what's used for the homepage and other non-doc pages.

## Building the site for Druid

> Note that different versions of Druid use different versions of Docusaurus due to upgrades

By default, the repo always starts/builds latest if you run `npm start|build` or `yarn start|build`. This way, you can always view the site locally.

The build scripts described in [Publish the site](#publish-the-site) handles building the versioned docs for when you're ready to do a release.

To start, you'll need to install Docusaurus 3.  

### Docusaurus version

Different Druid versions run different docusaurus versions due to upgrades. The versions are only somewhat compatible. The publishing process for Docusaurus 2 and 3 are the same. The scripts were upgraded behind the scenes, so the user-facing commands are still the same. Druid verisons before 26 (Docusaurus) 1 use a [different process](#building-the-site-before-druid-26).

- Druid 32.0.1: Docusaurus 3
- Druid 26-32.0.0 : Docusaurus 2 
- Druid versions earlier than 26: Docusaurus 1

### Install Docusaurus 

You need a supported version of node, such as the latest Node 18.

Run `npm install` or `yarn install` in the root of the directory.

### Publish the site

These are the steps to publish either a new release or a hotfix to an existing release. Note that you'll always need to build `latest` so that the downloads page lists the correct versions, so the script automatically builds latest for you.

Before you start:
* Make sure you're on the correct branch in your `apache/druid` repo.
* Get the path of the apache/druid repo. You can skip this if you have `apache/druid` and `apache/druid-website-src` as peers at the same directory level.

1. Update the version list in `static/js/version.js`. The highest release version goes in position 0. This file is used by `RecentReleasesWidget` on the home page to display the 3 most recent versions and to interpolate the download links on the download page.

2. From the root of `druid-website-src`, go to `scripts/`.

3. In `scripts`, run `python do_all_things.py -v VERSION`. The script assumes you used `npm` to install. See example 3 if you use `yarn`.

    **Example 1**: This command builds version 27.0.0 of the docs and latest.
    
    ```
    python do_all_things.py -v 27.0.0
    ```

    **Example 2**: If you already have Docusaurus 2 installed, skip the installation by specifying the flag `--skip-install`.
    
    ```
    python do_all_things.py -v 27.0.0 --skip-install
    ```

    **Example 3**: If you want to use yarn instead of npm, specify the flag `--yarn`.
    
    ```
    python do_all_things.py -v 27.0.0 --yarn
    ```

    **Example 4**: If you have apache/druid in different place from druid-website-src, or use a different directory name than `druid`, specify its path using the `--source` flag.

    ```
    python do_all_things.py -v 27.0.0 --source /my/path/to/apache/druid
    ```

    **Example 5**: If you want to use the Markdown files already in this repo because you don't want to also publish doc changes, use the `--no-docs` flag. The script will use the docs already in `docs/latest` to build the site. Use this if you need to republish the site to update the homepage widgets or other non-doc website pages.
    
    ```
    python do_all_things.py --no-docs
    ```

   For more information about the scripts, see [the scripts](#the-scripts).

> While the script builds the docs for the specified version, you'll get some false positives for broken links. (The first version that the script builds.) These are from the website pages to `/latest` doc pages, which don't exist yet. You only need to pay attention to broken links from the second build, which is for `latest`.

   The versions you built (such as 26.0.0 and latest) are in `build` along with the homepage etc.

4. Go to `build` and verify the site. If you run it locally, such as with `http-server` you'll get the latest version of the site, such as `localhost:8080/docs/latest/` and the version you built, such as `localhost:8080/docs/26.0.0/`. 

6. Use the contents of `build` to make a PR to `https://github.com/apache/druid-website` (either the `asf-staging` branch or the `asf-site` branch). Make sure you do not delete the previous Druid versions in the `docs` folder in `druid-website`.

### The scripts

The `do_all_things.py` script is a wrapper for the following scripts:

- Uses `copy_druid_docs.py` to copy the markdown files for the docs over and inserts the actual Druid version for the variable {{DRUIDVERSION}}. It copies the Markdown files to `docs/VERSION`. If the version is going to be the highest version available, it'll also copy to `docs/latest`.

- Uses `build_docs.py` to build the version you want and latest. You always need to build latest to update the downloads page and the widgets on the home page. It also handles writing the redirects to create the versioned redirects for (`/docs/VERSION/`). 

Once `do_all_things.py` builds the version you want and latest, it copies the build output to `published_versions`. You can use this directory to republish the whole site.

`published_versions` houses the following:

- The old CSS needed to properly render Docusaurus 1 pages
- The website pages, like Community
- All the built HTML pages for the docs, including pre-Docusaurus 2 HTML pages

## Building the site before Druid 26

The HTML files for pre-Docusaurus 2 versions (versions before 26) are in `./docs`. If you need to publish updated versions of those files for any reason, you need to build the docs with Docusaurus 1 in the `apache/druid` repo first:

1. Checkout the branch you want to build, such as `25.0.0` in `apache/druid`.
2. In `apache/druid/website`, install the old version of Docusaurus and run `npm run build` or `yarn build`.
3. Copy the HTML files for the docs from the build output to `/docs/VERSION` in this repo.
4. Copy those files to `/docs/VERSION` in `druid-website`.

## Example data files

If you want to add a new example data file, add it to the `data` directory in the root of the repo. As part of the build process, it gets copied into the build output that's used to publish the site.

## Contributing

See [CONTRIBUTING.md](https://github.com/apache/druid-website-src/blob/master/CONTRIBUTING.md).

