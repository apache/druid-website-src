---
title: Apache Druid Proof of Concept
layout: simple_page
sectionid: druidpoc
canonical: 'https://druid.apache.org/druid-poc'
---

<h1>Apache Druid</h1>
<h2>Preparing for a proof of concept</h2>

**Contents**

- [Introduction](#introduction)
  - [Recommended Overall POC Process](#recommended-overall-poc-process)
- [Guidelines for PoC Criteria](#guidelines-for-poc-criteria)
    - [Data Ingestion](#data-ingestion)
    - [Ad Hoc Analytics](#ad-hoc-analytics)
    - [System Behavior](#system-behavior)
    - [Mapping Production Requirements to your POC](#mapping-production-requirements-to-your-poc)
- [Executing the POC](#executing-the-poc)
  - [Your first iteration](#your-first-iteration)
  - [Second iteration](#second-iteration)
  - [Subsequent iterations](#subsequent-iterations)
  - [High Availability considerations](#high-availability-considerations)
- [Completing The POC](#completing-the-poc)
- [Appendix](#appendix)
  - [Community Resources](#community-resources)
  - [Training](#training)
  - [What is Imply](#what-is-imply)

# Introduction

The Apache Druid database has been used around the world by application developers to deliver transformative analytics applications for leading organizations. Why Druid? Developers and architects choose Apache® Druid because of its unique capabilities to deliver:



* Sub-second analytics at any data scale
* Real-time queries on both streaming and batch data
* High concurrency at the lowest cost
* Scale up and down with ease

Built from the outset using a cloud-era design, this database for modern analytics applications continues to help organizations deliver resilient, scalable, and performant decision support solutions.

This guide for teams and their project managers will assist you in planning your first _real_ test of Druid.  In this guide, you will find a suggested POC approach and links with information to documentation and articles from Druid experts that will be useful along the way.

To illustrate this POC process, we’ll consider an example consisting of transactions from 5,000 retail stores over a two-year period. This approach attempts to minimize the scale at which tests are executed in order to minimize cost.

Join us in the [Druid community](https://druid.apache.org/community), where you’ll find videos, articles and active Q&A forums to help in your journey.


## Recommended Overall POC Process

Here’s our recommended approach:



* Define your requirements and success criteria
* Execute the POC
    * Define the scope of the data, beginning with a small dataset, and then iterating while scaling up
    * In each iteration, estimate cluster size, deploy, test and tune for efficiency
* Complete your POC
    * Achieve success criteria
    * Extrapolate results to production level deployment plan

With all of that in mind, let’s dig in!


# Guidelines for PoC Criteria

As an application developer, you care about how to use Druid to deliver the analytic experience for your users with the data, performance and reliability they need. We recommend that you start by identifying production-level requirements in three categories: Data Ingestion, Analytic Queries and System Behavior.


### Data Ingestion

On a table-by-table basis, think about requirements for loading data in both batch and real-time, as well as retention needs:



* On-going batch ingestion of &lt;_batch data rate_> completed within &lt;_batch window_>
    * &lt;_batch data rate_> the size of the data to load per batch
    * &lt;_batch window_> the maximum duration of the ingestion job
* Backfill ingestion of &lt;_total backfill size_> within &lt;_initial load period_> covering &lt;_time horizon_>
    * &lt;_total backfill size_> the size of the initial load data
    * &lt;_initial load period_> the maximum amount of time allocated for initial load
    * &lt;_time horizon_> the depth of the history being loaded
* Real-time ingestion of &lt;_message rate_> messages with an average size of &lt;_avg message size_>
    * &lt;_message rate_> number of messages published per unit of time
    * &lt;_avg message size_> the average size of an individual message

Examples might be:



* Ongoing batch ingestion of **2TB a day** completed within **4 hours**
* Ongoing batch ingestion of **10GB an hour** completed within **5 min**
* Backfill ingestion of **2PB** within **2 weeks** covering **2 years** of events
* Real-time ingestion of **100,000 msgs/minute** with an average size of **2KB**


### Ad Hoc Analytics

Query workload requirements relate to query patterns and to performance targets. Query patterns describe the characteristics of a set of queries that are needed to provide application functionality.



* Pattern definition: &lt;_query type_> on &lt;_dataset_> grouping by &lt;_grouping dimensions_> over &lt;_data timeframe_> and &lt;_expected filters_>
    * &lt;_query type_> kinds of analytic queries: aggregation, topN, scan, search
    * &lt;_dataset_> target table
    * &lt;_grouping dimensions_> list of possible aggregation columns
    * &lt;_data timeframe_> the interval of time that the query should cover
    * &lt;_expected filters_> common WHERE clause columns
* Performance target: &lt;_target query rate_> with &lt;_target SLO_>
    * &lt;_target query rate_> the number of queries during a time period
    * &lt;_target SLO_> the percentage of queries that complete below a given response time

Here are some examples:



* Example 1:
    * Pattern: **Aggregate metrics (min/max/avg $ and units)** on **POS Data** grouping by **Vendor**, **Product Category**, **Subcategory**, and **Customer Type** over **the last 8 hours** and **filtering by store**
    * Performance: **50 queries per second (QPS)** with **99% running under 1s**
* Example 2:
    * Pattern: **Find top 10 products by total sales** on **POS Data** grouping by **Customer Type** over the **last 30 days** and **filtering by store**
    * Performance: **1 queries per hour (QPS)** with **99% running under 5s**


### System Behavior

In addition to driving data ingestion and analytic queries, Apache® Druid uses a design that helps solutions to be highly available and resilient to failures. Some teams may wish to test these characteristics during the POC, here are some examples of behavioral requirements:



* High Availability
    * Ingestion and query processing should automatically recover in case of any single component failures
* Resilience
    * Real-time ingestion survives task failures and continues to provide correct results
* Integration
    * Use JDBC to connect Tableau for visualization


### Mapping Production Requirements to your POC

The POC should prove:



* Apache® Druid meets your analytic query needs
* Apache® Druid scales linearly with your data ingestion and analytic queries
* You meet your success criteria

You can prove these points using a smaller version of your production requirements:



* Start with a small version
* Iterate to extrapolate your production needs
* Stop iterating once you’ve confirmed scalability with your overall workload

To scale down your data, consider the following:



* For your first iteration, and to keep cost low, use a small sample of your dataset (&lt;1GB) that will fit in a [single server deployment](https://druid.apache.org/docs/latest/operations/single-server.html) (even on a laptop)
* For subsequent iterations, choose a subset using a specific dimension
    * Ideally a dimension commonly used for filtering
    * As an example, if your dataset covers 5000 stores, choose 1% or 50 stores as a starting point, and something larger for the next iteration, perhaps 10%
* Make sure the time horizon supports the testing patterns
    * As an example, if you’re doing year over year comparisons, you’ll need two years of data

When iterating, consider the following:



* Tune your cluster to achieve your ingestion and analytic performance goals
    * As an example, you may want to introduce rollup, additional hardware, or tune parameters
* If you’re not seeing linear scalability, some additional tuning may be required
    * As an example, you may need to employ approximations to achieve performance goals

Consider your POC complete when:



* You have two or three iterations which scale at a predictable rate
* You can confidently extrapolate to production level resources


# Executing the POC


## Your first iteration

The goal of the first iteration is testing functionality. Functional testing doesn’t necessarily require large amounts of data, so we recommend using one of the single server deployments with a small sample dataset (&lt;1GB). The job here is to translate your query patterns into SQL and see that they run in Apache® Druid. This is what you’ll need to achieve this:



* [Single server deployment](https://druid.apache.org/docs/latest/operations/single-server.html)
* Learn to load and query data
    * [Quickstart tutorial](https://druid.apache.org/docs/0.23.0/tutorials/index.html)
    * [Druid Basics Training](https://learn.imply.io/apache-druid-basics)
    * [Multi-stage Query Framework Basics](https://learn.imply.io/feature-preview-multi-stage-query-framework-basics)
* Load your own sample dataset
    * Supported [input formats](https://druid.apache.org/docs/0.23.0/ingestion/data-formats.html#input-format)
    * [Batch ingestion](https://druid.apache.org/docs/latest/ingestion/native-batch.html) (pre-Druid 24.0)
    * [SQL-based ingestion](https://druid.apache.org/docs/latest/multi-stage-query/index.html) (Druid 24.0 and above)
* [SQL Documentation](https://druid.apache.org/docs/0.23.0/querying/sql.html)

The SQL statements generated here can and should be used in subsequent iterations to drive concurrency testing.


## Second iteration

Here’s where things get more real, testing with real timeframes and required ingestion methods, as well as higher concurrency in analytic queries.



* [Estimate required cluster size](https://druid.apache.org/docs/latest/operations/basic-cluster-tuning.html)
* [Deploy the cluster](https://druid.apache.org/docs/0.23.0/tutorials/cluster.html) (or [deploy on K8s](https://github.com/apache/druid/tree/master/helm/druid))
* Load a significant portion of any historic data using [batch ingestion](https://druid.apache.org/docs/latest/ingestion/native-batch.html) (or [SQL-based ingestion](https://druid.apache.org/docs/latest/multi-stage-query/index.html))
    * 1%-5% is a good starting point
    * Make sure it covers the full timeframe of your production needs
    * With the retail example, we would load the data for two years for 50 stores
* Initiate ongoing incremental loads
    * Use 1%-5% of expected production incremental data volume
        * With the retail example, use the new transactions for the same 50 stores that were loaded in the historic data
    * In scheduled batches
        * Create incremental batch files
        * Use cron, airflow, or some similar tool to schedule the [ingestion API calls](https://druid.apache.org/docs/latest/operations/api-reference.html#post-5)
        * Using the API to run the ingestion
    * Or [streaming ingestion](https://druid.apache.org/docs/latest/ingestion/index.html#streaming) (if applicable)
        * A good resource to estimate compute resource needs is this [benchmark](https://imply.io/blog/exactly-once-streaming-ingestion/)
* Test and tune the queries produced in the initial iteration.
    * [Segment size optimization](https://druid.apache.org/docs/latest/operations/segment-optimization.html)
    * [Basic Cluster Tuning](https://druid.apache.org/docs/latest/operations/basic-cluster-tuning.html)
    * [Rollup](https://druid.apache.org/docs/latest/ingestion/rollup.html)
    * [Partitioning](https://druid.apache.org/docs/latest/ingestion/partitioning.html) & [Druid Notebooks on Partitioning Playlist](https://www.youtube.com/watch?v=7caGijktulo&list=PLDZysOZKycN4wNrNUpUhfXLP8Q___5omG)
    * [Ingestion and Data Modeling](https://learn.imply.io/apache-druid-ingestion-and-data-modeling)
* Drive concurrency using [JMeter](https://jmeter.apache.org/), or some similar tool, using the [SQL API](https://druid.apache.org/docs/latest/querying/sql-api.html)
* Search for other tuning opportunities
    * Higher concurrency may drive the need for further tuning of queries or increases in the scale of the deployment to achieve the performance goals
    * It’s important to [Configure the Connection Pool](https://druid.apache.org/docs/latest/operations/basic-cluster-tuning.html#connection-pool-guidelines)
    * [Metrics](https://druid.apache.org/docs/latest/operations/metrics.html) and monitoring may help you further tune your deployment
* Before considering this iteration complete:
    * Tune both ingestion and queries such that they meet success criteria
    * Try to minimize the resources required to achieve performance goals


## Subsequent iterations

Subsequent iterations seek to achieve performance goals at increasingly larger scales. Each iteration will entail:



* Increasing ingested data volume
    * I.e., number of rows in the tables
* Increasing the throughput of the real-time data pipeline
    * Assuming that you’re streaming data
* Increasing concurrency of the analytic queries

At the start of each iteration, you’ll need to:



* [Estimate required size at new data volume](https://druid.apache.org/docs/latest/operations/basic-cluster-tuning.html)
* [Resize your cluster](https://druid.apache.org/docs/latest/tutorials/cluster.html#configuration-tuning) (you can also [resize on K8s](https://github.com/apache/druid/tree/master/helm/druid))
* Load more historic data using [batch ingestion](https://druid.apache.org/docs/latest/ingestion/native-batch.html) (or [SQL-based ingestion](https://druid.apache.org/docs/latest/multi-stage-query/index.html))
    * 2X or 10X would likely be good increments
    * Make sure it covers the full timeframe of production needs
    * With the retail example, we might load the data for two years for 500 stores
* Scale ongoing incremental loads
    * Use 2X or 10X of the previous iteration’s data volume
        * With the retail example, use the new transactions for the same 500 stores that were loaded in the historic data
* Drive concurrency using [JMeter](https://jmeter.apache.org/), or some similar tool, using the [SQL API](https://druid.apache.org/docs/latest/querying/sql-api.html)
* Search for other tuning opportunities
    * Higher concurrency may drive the need for further tuning of queries or increases in the scale of the deployment to achieve the performance goals
    * Remember to [Configure the Connection Pool](https://druid.apache.org/docs/latest/operations/basic-cluster-tuning.html#connection-pool-guidelines) if changes are needed for the new scale
    * [Metrics](https://druid.apache.org/docs/latest/operations/metrics.html) and monitoring may help further tune the deployment


## High Availability considerations

Apache<sup>®</sup> Druid is configurable for [high availability](https://druid.apache.org/docs/latest/operations/high-availability.html). Once configured for high availability, automatic recovery will occur for both ingestion and queries:



* Batch ingestion
    * [Automatically retries failed tasks](https://druid.apache.org/docs/latest/design/overlord.html#blacklisted-workers)
* Real-time ingestion
    * [Exactly once streaming ingestion](https://imply.io/blog/exactly-once-streaming-ingestion/)
    * Replicas in ingestion spec for [automatic task failover](https://druid.apache.org/docs/latest/development/extensions-core/kafka-supervisor-reference.html#kafkasupervisorioconfig) and increased query parallelism
* Queries
    * [Architecting Druid for failure](https://www.oreilly.com/content/architecting-druid-for-failure/)

To test for failures, shut down individual components while the full workload is executing, and observe the recovery process.


# Completing The POC

Have you achieved the success criteria? Is it possible to extrapolate the results to a production level deployment plan? Success!

Given that you have achieved your performance requirements in each iteration at different scales, It is now possible to extrapolate the results to a production level deployment plan. System behavior requirements are now achieved by configuring and testing high availability of the solution. Time to use Apache<sup>®</sup> Druid to drive analytic applications at any scale!


# Appendix


## Community Resources

The Apache® Druid [community](https://druid.apache.org/community/) is welcoming and active. Whether it’s coming along to a meetup, sitting in on a virtual Druid Drop-In, or asking a question in [Druid Forum](https://www.druidforum.org/) or the [Apache® Druid Slack Workspace](https://druid.apache.org/community/join-slack), we are all here to help one another.  Here’s a sample of content that Druid’s community members have published around POCs.



* Watch the “[POC Fireside Chat with Rachel Pedreschi and Jon King](https://www.youtube.com/watch?v=GW3POkX8pzI)” by Charles Smith

If you would like to hear more about any aspect of this process, book time with Imply’s Developer Relations team.  We’ll gladly share our understanding and experience with you (without prejudice!), offering our thoughts on how you might want to approach evaluating Druid through a POC.



* [Schedule a Druid POC Clinic with a Developer Advocate](https://calendly.com/imply-devrel/clinic-druidpoc)


## Training

Imply offers an [Imply Faculty with a catalog of courses ](https://learn.imply.io/)and labs for Apache® Druid. To accelerate your POC implementation and get the most out of Druid, we recommend that you take advantage of these course offerings:



* [Druid Basics](https://learn.imply.io/apache-druid-basics)
* [Druid Data Modeling & Ingestion ](https://learn.imply.io/apache-druid-ingestion-and-data-modeling)
* [Multi-stage Query Framework Basics](https://learn.imply.io/feature-preview-multi-stage-query-framework-basics)


## What is Imply

[Imply](https://imply.io/) was founded by the creators of Druid to help developers, analysts, architects, and others in the Druid community get more from the database. Many of Imply’s employees are active contributors to open source projects, including Apache® Druid. Imply has sponsored this document because we are passionate about helping developers be successful with Apache® Druid.

One easy way to get started with Druid is [Imply Polaris](https://imply.io/polaris-signup/), a fully-managed Druid-as-a-Service. A free trial gets you a ready-to-use Druid environment in under 5 minutes.