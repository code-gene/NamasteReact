import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  
  return (
    <div className="body">
      <div className = "filter">
        <button 
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setRestaurantList(filteredData);
          }}
        >
        Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
