import { restaurantList } from "../contain";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import CardShimer from "../shimmer/CardShimer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchRestaurants, setsearchRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6864894&lng=77.2595642&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      //console.log(data.data);

      setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setShimmer(true);
      //.then((res) => res.json())
      //.then((data) => console.log(data));
    }
    getData();
  }, []);

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
      {shimmer ? (
        <div className="restaurant-list">
          {restaurants?.map((restaurant) => {
            return (
              <Link
                key={restaurant.data.id}
                to={"/restaurant/" + restaurant.data.id}
              >
                <RestaurantCard
                  data={restaurant.data}
                  {...restaurant.data}
                  key={restaurant.data.id}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="restaurant-list">
          {Array(15)
            .fill(0)
            .map((itme, index) => (
              <CardShimer key={index} />
            ))}
        </div>
      )}
    </>
  );
};

export default Body;
