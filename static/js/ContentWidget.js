import React from 'react';

export function FeaturedContent({ data }) {
  return (
    <div>
  <p><a href={data.link}><b>{data.title}</b></a><br />
{data.name}<br />
{data.date}<br />
</p>
    </div>
  );
  }


export  function FeaturedContentContainer({ jsonData }) {
  const firstFive = jsonData.slice(0,5);
  return (
      <div>
        {firstFive.map((data) => (
          <FeaturedContent key={data.name} data={data} />
        ))}
      </div>
    );
  }