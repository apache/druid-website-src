import React from "react";
import { eventData } from "./event-data";


export const Events = () => {

  return (

    <>

      <div>

        {eventData.map((data, key) => {

          return (

            <div key={key}>
  <p><b>{data.date}</b></p>
  <p>{data.name}</p>
  <p>{data.info}</p>
  <p><a href={data.link}>Learn more</a></p>
            </div>

          );

        })}

      </div>

    </>

  );

};