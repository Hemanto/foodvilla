import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Widget from "../components/Widget";

//menu api= https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6864894&lng=77.2595642&menuId=294766
// menu api=https://www.swiggy.com/dapi/menu/v4/full?lat=28.69087559999999&lng=77.27338019999999&menuId=399025

function ResturantDetails(props) {
  const { id } = useParams();
  const [restaurantResponse, setRestaurantResponse] = useState();
  useEffect(() => {
    console.log(id);
    fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.69087559999999&lng=77.27338019999999&menuId=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        setRestaurantResponse(res);
      });
  }, []);

  const widgets = restaurantResponse?.data?.menu?.widgets;
  const items = restaurantResponse?.data?.menu?.items;
  return (
    <div>
      {widgets?.map((w, i) => (
        <Widget items={items} {...w} />
      ))}
    </div>
  );
}

export default ResturantDetails;
