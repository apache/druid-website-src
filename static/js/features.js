import React from 'react';

export function SingleCard({ data }) {
  return (
    <div className="druid-feature">
      <h5>{data.title}</h5>
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