import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constants";

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
  /*
    - If no dependency array => useEffect is called on every render
    - If dependency array is empty array = [] => useEffect is called on initial render(just once)
    - If dependency array != empty => useEffect is called on every time dependency is updated
  */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      SWIGGY_API_URL
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
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
