import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MENU_IMAGE_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addRestaurantDetails, getItemCount, removeItem } from "../../utils/cartSlice";
import { useState } from "react";
import CartItemQuantity from "../Cart/CartItemQuantity";

// This component shows List of all Food items
const CategoryItemList = ({ items }) => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  
  const handleAddItemToCart = (item) => {
    console.log("Add Item to cart", item);
    dispatch(addItem(item));
  };

  const handleRemoveItemFromCart = (item) => {
    console.log("Remove Item from cart", item);
    dispatch(removeItem(item));
  };

  return (
    <div className="py-4">
      <ul className="menu-list space-y-4 px-16">
        {items.map((item) => {
          const itemIdToFind = item.card.info.id;
          const itemCount = cartItems.filter(
            (cartItem) => cartItem.card.info.id == itemIdToFind
          ).length;

          return (
            <li
              key={item.card.info.id}
              className="menu-item bg-white shadow-md p-4 rounded-lg flex items-center relative"
            >
              <div className="menu-item-info flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {item.card.info.name}
                </h3>
                <p className="text-gray-600">{item.card.info.description}</p>
                <div className="menu-item-details mt-2">
                  <span className="text-green-600 text-lg font-semibold">
                    {` ₹${(item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100
                    ).toFixed(2)}`}
                  </span>
                </div>
              </div>
              {item.card.info.imageId ? (
                <div>
                  <div className="absolute bottom-0 w-20 bg-transaparent text-white p-2 text-center font-normal text-sm flex justify-center">
                    {itemCount > 0 ? (
                      <CartItemQuantity
                        itemCount={itemCount}
                        onIncrement={() => handleAddItemToCart(item)}
                        onDecrement={() => handleRemoveItemFromCart(item)}
                      />
                    ) : (
                      <button
                        className="bg-black py-1 w-20 rounded-md"
                        onClick={() => handleAddItemToCart(item)}
                      >
                        Add +
                      </button>
                    )}
                  </div>
                  <img
                    className="menu-item-image rounded-lg object-cover h-20 w-20"
                    alt="item-image"
                    src={MENU_IMAGE_URL + item.card.info.imageId}
                  />
                </div>
              ) : (
                <div>
                  <div className="absolute bottom-0 w-20 bg-transaparent text-white p-2 text-center font-normal text-sm flex justify-center">
                    {itemCount > 0 ? (
                      <CartItemQuantity
                        itemCount={itemCount}
                        onIncrement={handleAddItemToCart}
                        onDecrement={handleRemoveItemFromCart}
                      />
                    ) : (
                      <button
                        className="bg-black py-1 w-20 rounded-md"
                        onClick={() => handleAddItemToCart(item)}
                      >
                        Add +
                      </button>
                    )}
                  </div>
                  <div className="menu-item-shimmer rounded-lg object-cover h-20 w-20 bg-gray-100"></div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryItemList;
