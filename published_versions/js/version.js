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
    version: "32.0.0",
    date: "Feb 12 2025",
  },
  {
    version: "31.0.1",
    date: "Dec 24 2024",
  },
  {
    version: "30.0.1",
    date: "Sep 17 2024",
  }
]

module.exports.Releases = Releases;
