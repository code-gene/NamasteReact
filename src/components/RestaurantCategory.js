import { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const { data } = props;
  // const { showItems } = props.showItems;
  // const {setShowIndex} = props.setShowIndex;

  const handleClick = () => {
    setShowIndex();
  };
  // console.log("Restaurant Category: ", data.itemCards);

  return (
    <div className="w-10/12 mx-auto my-4 bg-gray-50 shadow-md p-4">
      {/* Header */}
      <div
        className=" flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        {showItems ? <span>▲</span> : <span>▼</span>}
      </div>
      {/* Accordion Body*/}
      {showItems && (
        <CategoryItemList items={data.itemCards}></CategoryItemList>
      )}
    </div>
  );
};

export default RestaurantCategory;
