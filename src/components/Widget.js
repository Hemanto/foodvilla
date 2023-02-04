import React from "react";
import Dish from "./Dish";

function Widget(props) {
  return (
    <>
      <div>
        <h2>{props.name}</h2>
        {props.entities?.map((item) => (
          <Dish {...props.items[item.id]} />
        ))}
      </div>
    </>
  );
}

export default Widget;
