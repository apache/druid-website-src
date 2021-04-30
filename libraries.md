---
title: Community and Third Party Software
layout: simple_page
canonical: 'https://druid.apache.org/libraries'
---

Query Libraries
---------------

Some great folks have written their own libraries to interact with Apache Druid.

#### Python

* [druid-io/pydruid](https://github.com/druid-io/pydruid) - A python client for Druid

#### R

* [druid-io/RDruid](https://github.com/druid-io/RDruid) - An R connector for Druid

#### JavaScript

* [implydata/plywood](https://github.com/implydata/plywood) - A higher level API for Druid. An extension of the work that was started in facet.js.
* [7eggs/node-druid-query](https://github.com/7eggs/node-druid-query) - A Node.js client for Druid

#### Clojure

* [y42/clj-druid](https://github.com/y42/clj-druid) - A Clojure client for Druid

#### Elixir

* [GameAnalytics/panoramix](https://github.com/GameAnalytics/panoramix) - An Elixir client for Druid

#### Ruby

* [ruby-druid/ruby-druid](https://github.com/ruby-druid/ruby-druid) - A ruby client for Druid
* [redBorder/druid_config](https://github.com/redBorder/druid_config) - A ruby client to configure and check the status of a Druid Cluster
* [andremleblanc/druiddb-ruby](https://github.com/andremleblanc/druiddb-ruby) - A Ruby client for Druid using the Kafka Indexing Service

#### SQL

* [Apache Calcite](http://calcite.apache.org/) - SQL parser, planner and query engine whose [Druid adapter](http://calcite.apache.org/docs/druid_adapter.html) can query data residing in Druid, and combine it with data in other locations; has local and remote JDBC drivers [powered by Avatica](http://calcite.apache.org/avatica/)
* [implydata/plyql](https://github.com/implydata/plyql) - A command line and HTTP interface for issuing SQL queries to Druid

#### PHP

* [pixelfederation/druid-php](https://github.com/pixelfederation/druid-php) - A PHP client for Druid
* [Neeke/PHP-Druid](https://github.com/Neeke/PHP-Druid) - A Druid driver for PHP with PECL extension
* [level23/druid-client](https://github.com/level23/druid-client) - Druid-client library with a query-builder. This library also allows you to query metadata, reindex datasources and more. 

#### Scala

* [ing-bank/scruid](https://github.com/ing-bank/scruid) - A Scala client for Druid

#### Java

* [zapr/druidry](https://github.com/zapr-oss/druidry) - A Java Client and query generator for Druid

#### .NET

* [raygun/druid4net](https://github.com/MindscapeHQ/druid4net) - A .NET client for Druid written in C#. Supports the .NET full framework and .NET Core.

#### Rust

* [bugzmanov/druid-io-rs](https://github.com/bugzmanov/druid-io-rs) - Fully asynchronous, future-enabled Apache Druid client library for rust programming language.

Other Druid Distributions
-------------------------
* [eBay/embedded-druid](https://github.com/eBay/embedded-druid) - Leveraging Druid capabilities in stand alone application
* [Hortonworks Data platform](https://www.cloudera.com/products/hdp.html) - Hortonworks Data Platform includes Druid and Apache Hive to enable real-time data warehousing capabilities.   
* [Imply Analytics Platform](http://imply.io/download) - The Imply Analytics platform includes Druid bundled with all its dependencies, an exploratory analytics UI, and a SQL layer.

UIs
---

* [airbnb/superset](https://github.com/airbnb/superset) - A web application to slice, dice and visualize data out of Druid. Formerly Caravel and Panoramix
* [Deep.Explorer](https://www.deep.bi/solutions/apache-druid) - A UI built for slice & dice analytics, adhoc queries and powerful, easy data visualizations
* [Grafana](https://github.com/societe-generale/druidplugin) - A plugin for [Grafana](http://grafana.org/)
* [grafana](https://github.com/Quantiply/grafana-plugins/tree/master/features/druid) - A plugin for [Grafana](http://grafana.org/)
* [Pivot](https://github.com/implydata/pivot) - An exploratory analytics UI for Druid
* [Metabase](https://github.com/metabase/metabase) - Simple dashboards, charts and query tool for your Druid DB
* [Metatron](https://github.com/metatron-app/metatron-discovery) - All-in-one analytics with Druid from easy data preparation to fast visualization

Tools
-----

* [Insert Segments](/docs/latest/operations/insert-segment-to-db.html) - A tool that can insert segments' metadata into Druid metadata storage.
* [liquidm/druid-dumbo](https://github.com/liquidm/druid-dumbo) - Scripts to help generate batch configs for the ingestion of data into Druid
* [housejester/druid-test-harness](https://github.com/housejester/druid-test-harness) - A set of scripts to simplify standing up some servers and seeing how things work
* [spaghettifunk/druid-prometheus-exporter](https://github.com/spaghettifunk/druid-prometheus-exporter) - A HTTP service for collecting Druid metrics and exposing them as Prometheus metrics
* [rovio-ingest](https://github.com/rovio/rovio-ingest) - An implementation of the DatasourceV2 interface of Apache Spark™ for writing Spark Datasets to Apache Druid™.

Community Extensions
--------------------

These are extensions from the community, beyond those included in the Druid repository itself.

* [acesinc/druid-cors-filter-extension](https://github.com/acesinc/druid-cors-filter-extension) - An extension to enable CORS headers in http requests.

Add Your Software
-----------------

If you've written software that uses Druid and want it included on this page,
[edit it on GitHub](https://github.com/apache/druid-website-src/blob/master/libraries.md) to create a pull request!
