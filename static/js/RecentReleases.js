import React from 'react';
import * as release from "./release.js";

export  function RecentReleasesContainer({ jsonData }) {
    return (
      <div>
      <p><a href={ `https://github.com/apache/druid/releases/tag/druid-${release.version}`}>Apache Druid {release.version}</a></p>
      <p><a href={ `https://github.com/apache/druid/releases/tag/druid-${release.versionPrevious}`}>Apache Druid {release.versionPrevious}</a></p>
      </div>
    );
  }