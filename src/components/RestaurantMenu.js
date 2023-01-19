import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardShimer from "../shimmer/CardShimer";
import MenuCard from "./MenuCard";

//menu api= https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6864894&lng=77.2595642&menuId=294766

function RestaurantMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState({});
  const [resMenu, setResMenu] = useState({});
  useLayoutEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6864894&lng=77.2595642&restaurantId=" +
          id
      );
      const data = await response.json();

      setMenu(data?.data?.cards);
      setResMenu(
        data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    }
    getData();
  }, []);

  console.log(resMenu);

  return (
    <div>
      <h1>{menu[0]?.card?.card?.info?.name}</h1>
      {resMenu.length > 0 ? (
        <div>
          {resMenu?.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <CardShimer />
      )}
    </div>
  );
}

export default RestaurantMenu;
