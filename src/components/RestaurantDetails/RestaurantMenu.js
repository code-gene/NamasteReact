import React, { useEffect, useState } from "react";
import Shimmer from "../ShimmerEffect/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { CDN_URL, MENU_IMAGE_URL } from "../../utils/constants";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0)

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    locality,
    areaName,
    totalRatingsString,
    address,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu p-4">
      <div className="menu-header">
        <div className="restaurant-header mb-8">
          <img
            className="res-logo rounded-full object-cover mx-auto w-40 h-40 mb-4"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
          <h1 className="restaurant-name text-3xl font-extrabold text-center mb-2 text-gray-800">
            {name}
          </h1>
          <p className="restaurant-info text-gray-600 text-center mb-4">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </div>
        <div className="w-2/6 p-4 mx-auto bg-white rounded-lg shadow-sm">
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              <p className="text-lg font-bold px-2">{`📍`}</p>
              <p className="font-semibold">{`${locality}, ${areaName}`}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-800">
                {avgRating} ⭐
              </p>
              <p className="text-gray-700">{totalRatingsString}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <h2 className="text-2xl font-semibold mb-4 px-16">Menu</h2> */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
