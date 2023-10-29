import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL, MENU_IMAGE_URL } from "../utils/constants";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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

  console.log(itemCards);

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
        <div className="w-1/4 pb-4 mx-auto bg-white rounded-lg shadow-sm">
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
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
      <h2 className="text-2xl font-semibold mb-4 px-16">Menu</h2>
      <ul className="menu-list space-y-4 px-16">
        {itemCards.map((item, index) => (
          <li
            key={item.card.info.id}
            className="menu-item bg-white shadow-md p-4 rounded-lg flex items-center"
          >
            <div className="menu-item-info flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {item.card.info.name}
              </h3>
              <p className="text-gray-600">{item.card.info.description}</p>
              <div className="menu-item-details mt-2">
                <span className="text-green-600 text-lg font-semibold">{`Price: Rs.${(
                  item.card.info.price / 100
                ).toFixed(2)}`}</span>
              </div>
            </div>
            {item.card.info.imageId ? (
              <img
                className="menu-item-image rounded-lg object-cover h-20 w-20"
                alt="item-image"
                src={MENU_IMAGE_URL + item.card.info.imageId}
              />
            ) : (
              <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
                <Skeleton height={200} width={100} />
              </SkeletonTheme>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
