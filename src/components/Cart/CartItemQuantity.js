import React, { useState } from "react";

const CartItemQuantity = ({ itemCount, onIncrement, onDecrement }) => {

    console.log('Count: ', itemCount);

    return (
      <div className="menu-item-qn rounded-lg w-20 bg-black">
        <div className="flex items-center">
          <button
            onClick={onDecrement}
            className="bg-black text-white py-1 px-2 rounded-md"
          >
            -
          </button>
          <span className="mx-2 text-white">{itemCount}</span>
          <button
            onClick={onIncrement}
            className="bg-black text-white py-1 px-2 rounded-md"
          >
            +
          </button>
        </div>
      </div>
    );
};

export default CartItemQuantity;
