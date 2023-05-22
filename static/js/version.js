/*
Used for the following:
- to specify the version and date on the Downloads page. Also used in the URLs for the download links
- specify the Druid version and URL routing for the docs in docusaurus.config.js

version is the version you're going to release, and date is the release date

versionPrevious is the currently live release and its corresponding release date

urlPath is the value that's used for routing. The latest Druid docs are served on `latest` and its version, such as 25.0.0. So you'll need to build once with urlPath set to `latest` and once with it set to the version number.
*/

module.exports = {
  version: "25.0.0",
  date: "Jan 4 2023",
  versionPrevious: "24.0.2",
  datePrevious: "Dec 21 2022",
  urlPath: "latest",
};