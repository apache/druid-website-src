---
title: Use Cases
canonical: 'https://druid.apache.org/use-cases'
---

# Use cases

## Power real-time analytics, data applications, and more

Apache Druid is a database that is most often used for powering use cases where real-time ingest, fast query performance, and high uptime are important. As such, Druid is commonly used for powering GUIs of analytical applications, or as a backend for highly-concurrent APIs that need fast aggregations. Druid works best with event-oriented data.

Common application areas for Druid include:

<div class="fancy-list">

{{"
* Clickstream analytics (web and mobile analytics)
* Risk/fraud analysis
* Network telemetry analytics (network performance monitoring)
* Server metrics storage
* Supply chain analytics (manufacturing metrics)
* Application performance metrics
* Business intelligence / OLAP
" | markdownify }}

</div>

Some of these use cases are described in more detail below. For an overview of technical differentiation, please see the [FAQ](./faq.md).

<div class="zigzag-features">
<div class="zigzag-feature">
<span class="fa fa-users fa"></span>

{{"
## User activity and behavior

Druid is often used for clickstreams, viewstreams, and activity streams.
Specific use cases include measuring user engagement, tracking A/B test data for product releases, and understanding usage patterns.

Druid can compute user metrics such as [distinct counts](/docs/latest/querying/aggregations) both exactly and approximately.
This mean measures such as daily active users can be computed in under a second approximately (with 98% avg. accuracy) to view general trends, or computed exactly to present to key stakeholders.
Furthermore, Druid can be used for [funnel analysis](/docs/latest/development/extensions-core/datasketches-extension), and to measure how many users took one action, but did not take another action.
Such analysis is useful is tracking user signups for a product.

Druid’s search and filter capabilities enable rapid, easy drill-downs of users along any set of attributes.
Measure and compare user activity by age, gender, location, and much more.
" | markdownify }}

</div>

<div class="zigzag-feature">
<span class="fa fa-project-diagram fa"></span>

{{"
## Network flows

Druid is commonly used to collect and analyze network flows.
Druid is used to arbitrarily slice and dice flow data along any set of attributes.

Druid helps with network flow analysis by being able to ingest large amounts of flow records, and by being able to group or rank across dozens of attributes at query time at interactive speeds.
These attributes often include core attributes like IP and port, as well as attributes added through enhancement such as geolocation, service, application, facility, and ASN.
Druid's ability to handle flexible schemas means that you can add any attributes you want.
" | markdownify }}

</div>

<div class="zigzag-feature">
<span class="fa fa-comments-dollar fa"></span>

{{"
## Digital marketing

Druid is commonly used to store and query online advertising data.
This data typically comes from ad servers and is critical to measure and understand advertising campaign performance, click through rates, conversion rates (attrition rates), and much more.

Druid was initially designed to power a user-facing analytics application for digital advertising data.
Druid has seen substantial production use for this type of data and the largest users in the world have petabytes of data stored on thousands of servers.

Druid can be used to compute impressions, clicks, eCPM, and key conversion metrics, filtered on publisher, campaign, user information, and dozens of other dimensions supporting full slice and dice capability.
" | markdownify }}

</div>

<div class="zigzag-feature">
<span class="fa fa-tachometer-alt fa"></span>

{{"
## Application performance management

Druid is often used to track the operational data generated by applications.
Similar to the user activity use case, this data can be about how users are interacting with an application or it can be the metrics emitted by the application itself.
Druid can be used to drill into how different components of an application are performing, identify bottlenecks, and troubleshoot issues.

Unlike many traditional solutions, there are few limits to the volume, complexity, and throughput of the data.
Rapidly analyze application events with thousands of attributes, and compute complex metrics on load, performance, and usage.
For example, rank API endpoints based on 95th percentile query latency, and slice and dice how these metrics change based on any ad-hoc set of attributes such as time of day, user demographic, or datacenter location.
" | markdownify }}

</div>

<div class="zigzag-feature">
<span class="fa fa-thermometer-three-quarters fa"></span>

{{"
## IoT and device metrics

Druid can be used as a time series solution for server and device metrics.
Ingest machine generated data in real-time, and perform rapid ad-hoc analytics to measure performance, optimize hardware resources, or identify issues.

Unlike many traditional timeseries databases, Druid is an analytics engine at heart.
Druid combines ideas of timeseries databases, column-oriented analytic databases, and search systems.
Druid supports time-based partitioning, column-oriented storage, and search indexes in a single system.
This means time-based queries, numerical aggregations, and search and filter queries are all extremely fast.

You can include millions of unique dimension values with your metrics, and arbitrarily group and filter on any combination of dimensions (dimensions in Druid are similar to tags in TSDBs).
You can group and rank on tags, and compute a variety of complex metrics.
Furthermore, you search and filter on tag values orders of magnitude faster than in traditional timeseries databases.
" | markdownify }}

</div>

<div class="zigzag-feature">
<span class="fa fa-chart-pie fa"></span>

{{"
## OLAP and business intelligence

Druid is commonly used for BI use cases.
Organizations have deployed Druid to accelerate queries and power applications.
Unlike SQL-on-Hadoop engines such as Presto or Hive, Druid is designed for high concurrency and sub-second queries, powering interactive data exploration through a UI.
In general this makes Druid a better fit for truly interactive visual analytics.

Druid is a great fit if you need a user-facing application and you want your users to be able to run their own self service drill-down queries.
You can either develop your own application using Druid's API or use one of the [many off the shelf applications](/libraries) that work with Druid.
" | markdownify }}

</div>
</div>