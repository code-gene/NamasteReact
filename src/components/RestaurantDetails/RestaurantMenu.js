import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { CDN_URL} from "../../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import HomeShimmerEffect from "../ShimmerEffect/HomeShimmerEffect";
import RestaurantDetails from "./RestaurantDetails";

// This component shows Resturant Details and Menu Items
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

   if (resInfo === null) return <HomeShimmerEffect/>

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const resDetails = resInfo?.cards[0]?.card?.card?.info;
  console.log(categories);

  return (
    <div className="menu p-4">
      <RestaurantDetails resDetails={resDetails} />
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
