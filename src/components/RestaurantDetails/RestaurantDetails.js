import React from 'react'
import { CDN_URL } from '../../utils/constants';

const RestaurantDetails = ({resDetails}) => {
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
    } = resDetails;
  return (
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
      <div className="w-5/12 p-4 mx-auto bg-white rounded-lg shadow-sm">
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
  );
}

export default RestaurantDetails;