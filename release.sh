#!/bin/bash -eu

# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


if [ "$#" -ne 1 ] && [ "$#" -ne 2 ]; then
  echo "Illegal number of parameters, should one or two: the version, or the version and commitish";
  exit 1;
fi

echo "Building to docs for '$1'..."

baseDir=$(pwd)

pushd $baseDir
rm -rf _staging/
mkdir -p _staging/
cd _staging/
git clone git@github.com:apache/incubator-druid.git
cd incubator-druid/
git checkout $commitish

if [ "$#" -gt 1 ]; then
  git checkout $2
  mvn -Pwebsite-docs -pl website compile -Dwebsite.src=$baseDir -Dwebsite.version=$1
else
  git checkout druid-$1
  mvn -Pwebsite-docs -pl website compile -Dwebsite.src=$baseDir
fi

popd

git add .

echo "Building Website..."
npm run build
pushd $(pwd)
cd ../incubator-druid-website/
git add .
popd
