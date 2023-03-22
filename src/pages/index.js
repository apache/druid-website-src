import Layout from "@theme/Layout";
import React from "react";
import { Events } from "../../static/js/events";



      export default () => {
        return (
        <Layout title="Apache Druid">;
      <div>
        <link rel="stylesheet" href="/css/index.css" />
        <main className="druid-masthead">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h1>Apache<sup>®</sup> Druid</h1>
                <p className="lead">Druid is a high performance, real-time analytics database that delivers sub-second queries on streaming and batch data at scale and under load.</p>
                <p>
                  <a className="button" href="/downloads.html"><span className="fa fa-download" /> Download</a>
                  <a className="button" href="/community/join-slack?v=1"><span className="fab fa-slack" /> Join Slack</a>
                  <a className="button" href="https://github.com/apache/druid/"><span className="fab fa-github" /> GitHub</a></p>
                <p />
              </div>
            </div>
          </div>
        </main>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2>
                Overview
              </h2>
              <div className="features">
                <div className="feature">
                  <span className="fa fa-bolt" />
                  <h5>Sub-second queries at any scale</h5>
                  <p>
                    Execute OLAP queries in milliseconds on high-cardinality and high-dimensional data sets with billions to trillions of rows without pre-defining or caching queries in advance.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-dollar-sign" />
                  <h5>High concurrency at the lowest cost </h5>
                  <p>
                    Build real-time analytics applications that supports 100s to 100,000s queries per second at consistent performance with a highly efficient architecture that uses less infrastructure than other databases.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-chart-line" />
                  <h5>Real-time and historical insights</h5>
                  <p>
                    Unlock streaming data potential through Druid's native integration with Apache Kafka and Amazon Kinesis as it supports query-on-arrival at millions of events per second, low latency ingestion, and guaranteed consistency.
                  </p>
                </div>
              </div>
              <h2>
                Key Druid Features
              </h2>
              <div className="row key-druid-features">
                <div className="col-md-4">
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">Interactive Query Engine</h5>
                    </div>
                    <div className="card-body pt-0">
                      <p>Druid utilizes scatter/gather for high speed queries with data preloaded into memory or local storage to avoid data movement and network latency</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">Tiering &amp; QoS</h5>
                    </div>
                    <div className="card-body pt-0">
                      <p>Configurable tiering with quality of service enables the ideal price-performance for mixed workloads, guarantees priority, and avoids resource contention</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">Optimized Data Format</h5>
                    </div>
                    <div className="card-body pt-0">
                      <p>Ingested data is automatically columnarized, time indexed, dictionary encoded, bitmap indexed, and type-aware compressed</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">Elastic Architecture</h5>
                    </div>
                    <div className="card-body pt-0">
                      <p>Loosely coupled components for ingestion, queries and orchestration combined with a deep storage layer enable easy &amp; quick scale-up &amp; scale-out</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">True Stream Ingestion</h5>
                    </div>
                    <div className="card-body pt-0">
                      <p>A connector-free integration with streaming platforms enables query-on-arrival, high scalability, low latency, and guaranteed consistency</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">Non-stop Reliability</h5>
                    </div>
                    <div className="card-body pt-0">
                      <p>Automatic data services including continuous backup, automated recovery, and multi-node replication ensure high availability and durability</p>
                    </div>
                  </div>
                </div>
              </div>
              <h2>
                Learn more
              </h2>
              <div className="features">
                <div className="feature">
                  <span className="fa fa-power-off fa" />
                  <h5>Powered By</h5>
                  <p>
                    Druid is proven in production at the <a href="/druid-powered">world's leading companies</a> at massive scale.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-info fa" />
                  <h5>FAQ</h5>
                  <p>
                    Learn about some of the <a href="faq">most common questions about Druid</a>.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-flag-checkered fa" />
                  <h5>Quickstart</h5>
                  <p>
                    <a href="/docs/tutorials/">Get started with Druid</a> in minutes. Load your own data and query it.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-question-circle fa" />
                  <h5>Get Help</h5>
                  <p>
                    Get help from a <a href="/community/">wide network of community members</a> about using Druid.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-podcast fa" />
                  <h5>Podcast</h5>
                  <p>
                    Hear from the Druid community on <a href="https://podcasts.apple.com/us/podcast/tales-at-scale/id1655951714">Apple</a>, <a href="https://open.spotify.com/show/6KAKYLJvCVegsFfKvbfDnt">Spotify</a>, and <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5saWJzeW4uY29tLzQ0ODE3OS9yc3M">Google</a>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <h2>Upcoming Events</h2>
            <Events />




            </div>
          </div>
        </div>
      </div>
      </Layout>
    );
  }