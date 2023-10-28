import { CDN_URL } from '../utils/constants';

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
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <div className="res-rating">
          <span className="star-icon">⭐</span>
          <span className="avg-rating">{avgRating}</span>
        </div>
        <p className="res-cost">{costForTwo}</p>
        <p className="res-delivery-time">{`Delivery Time: ${deliveryTime} minutes`}</p>
      </div>
    </div>
  );
};


export default RestaurantCard;