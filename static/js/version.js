/*
Used for the following:
- to specify the version and date on the Downloads page. Also used in the URLs for the download links
- specify the Druid version and URL routing for the docs in docusaurus.config.js

version is the version you're going to release, and date is the release date

versionPrevious is the currently live release and its corresponding release date

urlPath is the value that's used for routing. The latest Druid docs are served on `latest` and its version, such as 25.0.0. So you'll need to build once with urlPath set to `latest` and once with it set to the version number.
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

 /* Add copy-to-clipboard buttons to code blocks */

module.exports = {
  version: "25.0.0",
  date: "Jan 4 2023",
  versionPrevious: "24.0.2",
  datePrevious: "Dec 21 2022",
  urlPath: "latest",
};