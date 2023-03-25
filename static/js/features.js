import React from 'react';

export function SingleCard({ data }) {
  return (
    <div className="druid-feature">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
  }

export  function CardList({ jsonData }) {
    return (
      <div className="druid-feature-container">
        {jsonData.map((data) => (
          <SingleCard key={data.id} data={data} />
        ))}
      </div>
    );
  }