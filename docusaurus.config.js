const Redirects = require('./redirects.js').Redirects;

/*
buildVersion is used for 2 things:

- `path` determines the docs folder to use for input, such as /docs/26.0
- `routeBasePath` for the the routing of the built . If  set to latest, you get http://localhost:3000/docs/latest/design/ built. 

The build script handles updating this variable for you when you're building the site for production. You do not need to update it manually. It's set to latest by default to allow the site to be built ad hoc for local preview.
*/
var buildVersion = "latest";

module.exports={
  "title": "Apache® Druid",
  "tagline": "A fast analytical database",
  "url": "https://druid.apache.org",
  "baseUrl": "/",
  "organizationName": "Apache®",
  "projectName": "ApacheDruid",
  "scripts": [
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js",
  ],
  "stylesheets": [
    "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "disableHeaderTitle": true,
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": false,
          "exclude": [
            '**incubating/**'
          ],
          "path": "./docs/"+buildVersion,
          "routeBasePath": "/docs/"+buildVersion,
          "sidebarPath": "./sidebars.json"
        },
        "theme": {
         "customCss": [
          "./src/css/customTheme.css",
          "./src/css/index.css"
         ]
        },
        "gtag": {
          "trackingID": "UA-131010415-1"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ],
        "redirects": Redirects
      }
    ]
  ],
  "themeConfig": {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    "navbar": {
      "logo": {
        "src": "img/druid_nav.png"
      },
      "style": "dark",
      "items": [
        {
          "to": "/technology",
          "label": "Technology",
          "position": "right"
        },
        {
          "to": "/use-cases",
          "label": "Use Cases",
          "position": "right",
        },
        {
        "to": "/druid-powered",
        "label": "Powered By",
        "position": "right",
        },
        {
          "to": "/docs/"+buildVersion+"/design/",
          "label": "Docs",
          "position": "right"
        },
        {
          "href": "/community/",
          "label": "Community",
          "position": "right"
        },
        {
          "label": "Apache®",
          "type": "dropdown",
          "position": "right",
          "items": [
            {
              "href": "https://www.apache.org/",
              "label": "Foundation"
            },
            {
              "href": "https://apachecon.com/?ref=druid.apache.org",
              "label": "Events"
            },
            {
              "href": "https://www.apache.org/licenses/",
              "label": "License"
            },
            {
              "href": "https://www.apache.org/foundation/thanks.html",
              "label": "Thanks"
            },
            {
              "href": "https://www.apache.org/security/",
              "label": "Security"
            },
            {
              "href": "https://www.apache.org/foundation/sponsorship.html",
              "label": "Sponsorship"
            }
          ],
        },
        {
          "href": "/downloads/",
          "label": "Download",
          "position": "right"
        }
      ]
    },
    "image": "img/druid_nav.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 Apache Software Foundation. Except where otherwise noted, licensed under CC BY-SA 4.0. Apache Druid, Druid, and the Druid logo are either registered trademarks or trademarks of The Apache Software Foundation in the United States and other countries.",
      "logo": {
        "src": "img/favicon.png"
      }
    },
    "algolia": {
      "appId": "CPK9PMSCEY",
      "apiKey": "d4ef4ffe3a2f0c7d1e34b062fd98736b",
      "indexName": "apache_druid",
      "algoliaOptions": {
        "facetFilters": [
          "language:LANGUAGE",
          "version:druidVersion"
        ]
      }
    }
  }
}