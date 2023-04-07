import React from 'react';

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