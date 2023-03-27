/*
Used by features.js in index.js to display the cards under the heading Key Druid Features. You can just add another more, and it'll keep adding cards in a 3 column pattern defined in index.css
*/

export const FeatureList = [
  {
    "title": "Interactive Query Engine",
    "description": "Druid utilizes scatter/gather for high speed queries with data preloaded into memory or local storage to avoid data movement and network latency",
  },
  {
    "title": "Tiering & QoS",
    "description": "Druid utilizes scatter/gather for high speed queries with data preloaded into memory or local storage to avoid data movement and network latency",
  },
  {
    "title": "Optimized Data Format",
    "description": "Ingested data is automatically columnarized, time indexed, dictionary encoded, bitmap indexed, and type-aware compressed",
  },
  {
    "title": "Elastic Architecture",
    "description": "Loosely coupled components for ingestion, queries and orchestration combined with a deep storage layer enable easy & quick scale-up & scale-out",
  },
  {
    "title": "True Stream Ingestion",
    "description": "A connector-free integration with streaming platforms enables query-on-arrival, high scalability, low latency, and guaranteed consistency",
  },
  {
    "title": "Non-stop Reliability",
    "description": "Automatic data services including continuous backup, automated recovery, and multi-node replication ensure high availability and durability",
  },
  ]