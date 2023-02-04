import React from "react";
import { IMG_CDN_URL } from "../contain";

function Dish(props) {
  return (
    <>
      <div className="container">
        <div>
          <span>{props.attributes.vegClassifier}</span>
          <h5>{props.name}</h5>
          <span>{props.price / 100}</span>
          <p>{props.description}</p>
        </div>
        <div>
          {props.cloudinaryImageId ? (
            <div
              className="imgBox"
              style={{
                backgroundImage: `url(${
                  IMG_CDN_URL + props.cloudinaryImageId
                })`,
              }}
            >
              {/* <img
                src={IMG_CDN_URL + props.cloudinaryImageId}
                alt={props.name}
              /> */}
            </div>
          ) : null}
          <button>add</button>
        </div>
      </div>
    </>
  );
}

export default Dish;
