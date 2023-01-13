import { restaurantList } from "../contain";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchRestaurants, setsearchRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  console.log(searchRestaurants);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            console.log(restaurantList);
            const data = filterData(searchText, restaurants);

            setsearchRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {searchText ? (
        <div className="restaurant-list">
          {searchRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      ) : (
        <div className="restaurant-list">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
