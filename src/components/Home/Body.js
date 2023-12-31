import RestaurantCard, { withPromotedLabel } from "../RestaurantDetails/RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import HomeShimmerEffect from "../ShimmerEffect/HomeShimmerEffect";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchString, setSearchString] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  /* 
    Whenever state variable updates, react triggers a reconciliation cycle
    (re-render the component)
  */

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
    const data = await fetch(SWIGGY_API_URL);

    const json = await data.json();

    const resData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(resData);
    setFilteredRestaurantList(resData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>Look like you're offline!! Please check your internet connection</h1>
    );
  
  // return <ShimmerEffect/>

  // coditional rendering
  return restaurantList == undefined ? (
    <h1>No data available</h1>
  ) : restaurantList.length === 0 ? (
    <div className="mt-20">
      <HomeShimmerEffect />
    </div>
  ) : (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search">
          <input
            type="text"
            className="search-box border border-solid border-gray-300 px-4 py-1.5 text-base rounded-sm focus:outline-none focus:ring focus:border-blue-400"
            value={searchString}
            onChange={(str) => setSearchString(str.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-sm"
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
        <div className="search m4 p-4 flex items-center rounded-sm">
          <button
            className="px-4 py-2 bg-gray-100"
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
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen && restaurant.info.sla.deliveryTime < 30 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
