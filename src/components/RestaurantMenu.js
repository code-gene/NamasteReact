import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating,
    locality,
    areaName,
    totalRatingsString,
    address} =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1 className="restaurant-name">{name}</h1>
      <p className="restaurant-info">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="restaurant-details">
        <p>{`Locality: ${locality}, ${areaName}`}</p>
        <p>{`Address: ${address}`}</p>
        <p>{`Average Rating: ${avgRating}`}</p>
        <p>{totalRatingsString}</p>
      </div>
      <h2>Menu</h2>
      <ul className="menu-list">
        {itemCards.map((item, index) => (
          <li key={item.card.info.id} className="menu-item">
            <div className="menu-item-info">
              <h3>{item.card.info.name}</h3>
              <p>{item.card.info.description}</p>
              <div className="menu-item-details">
                <span>{`Price: Rs.${(item.card.info.price / 100).toFixed(
                  2
                )}`}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
