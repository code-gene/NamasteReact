import { CDN_URL } from '../../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const deliveryTime = resData?.info?.sla?.deliveryTime;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 shadow-md border border-solid border-white50">
      <img
        className="res-logo rounded-lg object-cover mx-auto"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-details text-center">
        <h3 className="res-name font-bold text-lg py-2">{name}</h3>
        <p className="res-cuisines text-sm text-gray-500">
          {cuisines.join(", ")}
        </p>
        <div className="res-rating flex items-center justify-center mt-2">
          <span className="star-icon text-yellow-500 text-lg">⭐</span>
          <span className="avg-rating font-semibold text-gray-800">
            {avgRating}
          </span>
        </div>
        <p className="res-cost text-lg font-semibold text-green-500 mt-2">
          {costForTwo}
        </p>
        <p className="res-delivery-time text-gray-600 mt-1">{`Delivery Time: ${deliveryTime} minutes`}</p>
      </div>
    </div>
  );
};

/* 
  RestaurantCard --> Higher Order Component --> PromotedRestaurantCard
    (input)                                          (output)
*/

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-4 py-1 px-2 bg-opacity-60 backdrop-blur backdrop-filter bg-black text-white z-10 text-sm">
          30 mins Guranteed
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;