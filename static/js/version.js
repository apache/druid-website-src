/*
Used by 
- RecentReleasesWidget in index.js to display the first 3 entries from the top. 
- docusaurus.config.js to determine the docs folder to use to build the site
- the downloads page to interpolate the links

*/

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


const Releases = [
  {
    version: "28.0.1",
    date: "Dec 20 2023",
  },
  {
    version: "27.0.0",
    date: "Aug 10 2023",
  },
  {
    version: "26.0.0",
    date: "May 23 2023",
  }
]

module.exports.Releases = Releases;
