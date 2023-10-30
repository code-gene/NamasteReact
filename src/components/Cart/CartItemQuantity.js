import React, { useState } from "react";

const CartItemQuantity = ({ initialCount, onIncrement, onDecrement }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    if (count < 50) {
      setCount(count + 1);
      onIncrement();
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onDecrement();
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrement}
        className="bg-black text-white py-1 px-2 rounded-md"
      >
        -
      </button>
      <span className="mx-2">{count}</span>
      <button
        onClick={handleIncrement}
        className="bg-black text-white py-1 px-2 rounded-md"
      >
        +
      </button>
    </div>
  );
};

export default CartItemQuantity;
