import React from "react";
import { eventData } from "./event-data";


export const Events = () => {

  return (

    <>

      <div className="stock-container">

        {eventData.map((data, key) => {

          return (

            <div key={key}>

              {data.date +

                " , " +

                data.name +

                " ," +

                data.info +

                ", " +

                data.link 
                }

            </div>

          );

        })}

      </div>

    </>

  );

};