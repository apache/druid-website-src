import React from 'react';

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


export function RecentReleases({ data }) {
  return (
    <div>
      <p>
        <a href={`https://github.com/apache/druid/releases/tag/druid-${data.version}`}><b>{data.version}</b></a>
        {data.date}
      </p>
    </div>
  );
}

export  function RecentReleasesContainer({ jsonData }) {
  const firstThree = jsonData.slice(0,3);
  return (
    <div>
      {firstThree.map((data) => (
        <RecentReleases key={data.version} data={data}/>
      ))}
    </div>
  );
}