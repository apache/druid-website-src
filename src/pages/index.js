import Layout from "@theme/Layout";
import React from "react";
import { CardList } from "../../static/js/features";
import { FeatureList } from "../../static/js/FeatureList";
import '../css/index.css';
import "../../static/css/base.css";


/* Imports for the 3 widgets on the right for events, content, and releases
*/
import { EventsContainer } from "../../static/js/EventsWidget";
import { EventData } from "../../static/js/EventList";
import { FeaturedContentContainer } from "../../static/js/FeaturedContentWidget";
import { Content } from "../../static/js/FeaturedContent";
import { RecentReleasesContainer } from "../../static/js/RecentReleasesWidget";
import { Releases } from "../../static/js/version";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default () => {
  return (
    <Layout title="Apache Druid">
      <div>
        <main className="druid-masthead">
          <Container >
            <Row>
              <Col>
                <div className="text-center">
                  <h1>Apache<sup>®</sup> Druid</h1>
                  <p className="lead">Druid is a high performance, real-time analytics database that delivers sub-second queries on streaming and batch data at scale and under load.</p>
                  <p>
                    <a className="button" href="/downloads.html"><span className="fa fa-download" /> Download</a>
                    <a className="button" href="/community/join-slack?v=1"><span className="fab fa-slack" /> Join Slack</a>
                    <a className="button" href="https://github.com/apache/druid/"><span className="fab fa-github" /> GitHub</a></p>
                  <p />
                </div>
              </Col>
            </Row>
          </Container >
        </main>
        <Container >
          <Row>
            <Col>
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
              <div>
                <CardList jsonData={FeatureList} />
              </div>
              <br />
              <h2>
                Learn more
              </h2>
              <div className="features">
                <div className="feature">
                  <span className="fa fa-power-off fa" />
                  <h5> Powered By</h5>
                  <p>
                    Druid is proven in production at the <a href="/druid-powered">world's leading companies</a> at massive scale.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-info fa" />
                  <h5> FAQ</h5>
                  <p>
                    Learn about some of the <a href="faq">most common questions about Druid</a>.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-flag-checkered fa" />
                  <h5> Quickstart</h5>
                  <p>
                    <a href="/docs/latest/tutorials/">Get started with Druid</a> in minutes. Load your own data and query it.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-question-circle fa" />
                  <h5> Get Help</h5>
                  <p>
                    Get help from a <a href="/community/">wide network of community members</a> about using Druid.
                  </p>
                </div>
                <div className="feature">
                  <span className="fa fa-podcast fa" />
                  <h5> Podcast</h5>
                  <p>
                    Hear from the Druid community on <a href="https://podcasts.apple.com/us/podcast/tales-at-scale/id1655951714">Apple</a>, <a href="https://open.spotify.com/show/6KAKYLJvCVegsFfKvbfDnt">Spotify</a>, and <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5saWJzeW4uY29tLzQ0ODE3OS9yc3M">Google</a>.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="widget-container">
                <h3>Upcoming Events</h3>
                <EventsContainer jsonData={EventData} />
                <a className="button" href="https://www.meetup.com/topics/apache-druid/">Join a Druid Meetup!</a><br />
              </div>
              <div className="widget-container">
                <h3>Featured Content</h3>
                <FeaturedContentContainer jsonData={Content} />
              </div>
              <div className="widget-container">
                <h3>Recent releases</h3>
                <RecentReleasesContainer jsonData={Releases} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </Layout>
    );
  }