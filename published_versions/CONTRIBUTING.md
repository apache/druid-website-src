# License

By contributing to this repository you agree to license your contribution under the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/)

# How to contribute

The `druid-website` repository is only used to deploy the `druid.apache.org` and `druid.staged.apache.org` sites. Content changes should be proposed in PRs to to the following repos:

- Anything in the documentation pages: https://github.com/apache/druid/tree/master/docs
- Website pages such as the download or homepage: https://github.com/apache/druid-website-src

# Branches

When making PRs to this repo, deploy changes to staging first and then to production.
Changes to either site should be available nearly instantaneously after the PR gets merged.

- `asf-staging` is the staging branch that corresponds to `druid.staged.apache.org`. 

- `asf-site` is the production branch that corresponds to `druid.apache.org`.

# Test the site

You can verify what the staging or prod site will look like by using an app like `http-server` from the root of the repo to deploy the site locally.