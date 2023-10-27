import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchString, setSearchString] = useState("");

  /* 
    Whenever state variable updates, react triggers a reconciliation cycle
    (re-render the component)
  */
  console.log("Body Rendered");

  // useEffect is called after the component renders
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    const resData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(resData);

    setRestaurantList(resData);
    setFilteredRestaurantList(resData);
  };

  // coditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchString}
            onChange={(str) => setSearchString(str.target.value)}
          ></input>
          <button
            onClick={() => {
              const filteredData = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchString.toLowerCase())
              );
              setFilteredRestaurantList(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = filteredRestaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurantList(filteredData);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
