import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {props.tours.map((tour) => {
          // The ... means the tour component has access to all the properties passed in
          return (
            <Tour key={tour.id} {...tour} removeTour={props.removeTour}></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
