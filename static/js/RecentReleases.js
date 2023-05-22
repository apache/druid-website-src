import React from 'react';
import * as version from "./version.js";

export  function RecentReleasesContainer({ jsonData }) {
  return (
    <div>
      <p><a href={ `https://github.com/apache/druid/releases/tag/druid-${version.version}`}>Apache Druid {version.version}</a></p>
      <p><a href={ `https://github.com/apache/druid/releases/tag/druid-${version.versionPrevious}`}>Apache Druid {version.versionPrevious}</a></p>
    </div>
  );
}