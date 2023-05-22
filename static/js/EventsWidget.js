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

 /* Add copy-to-clipboard buttons to code blocks */

/* Displays the upcoming events from EventList*/

export function Events({ data }) {
  return (
    <div>
      <p>
        <i className="fa fa-solid fa-calendar cal-icon"></i>
        <b>{data.date}</b><br/>
        {data.name}<br/>
        {data.info}<br/>
        <a href={data.link}>Learn more</a>
      </p>
    </div>
  );
}

export  function EventsContainer({ jsonData }) {
  return ( 
    <div>
      {jsonData.map((data) => (
        <Events key={data.name} data={data} />
      ))}
    </div>
  );
}