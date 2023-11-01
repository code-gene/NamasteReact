import { useSelector } from "react-redux";
import CategoryItemList from "../RestaurantDetails/CategoryItemList";
import RestaurantDetails from "../RestaurantDetails/RestaurantDetails";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const resDetails = useSelector((store) => store.cart.resDetails);

  var uniqueCartItems = [];
  var totalItemsCost = 0;

  for (const item of cartItems) {

    // Add cost to Total
    totalItemsCost += (item.card.info.price / 100);
    // Check if the item's card.info.id is not already in uniqueCartItems
    if (
      !uniqueCartItems.some(
        (uniqueItem) => uniqueItem.card.info.id === item.card.info.id
      )
    ) {
      uniqueCartItems.push(item);
    }
  }

  const deliveryFee = resDetails.feeDetails.totalFee / 100;
  const platformFee = 3;
  const gstAmount = 0.18 * totalItemsCost;

  const grandTotal = totalItemsCost + gstAmount + deliveryFee + platformFee;

  if (uniqueCartItems.length == 0) {
    return (
      <div class="mt-52 flex items-center justify-center">
        <h1 class="text-2xl font-semibold">
          No items in cart. Please add to cart
        </h1>
      </div>
    );
  }

  

  return (
    <div className="cart">
      <div className="md:col-span-3">
        <RestaurantDetails resDetails={resDetails} />
      </div>
      <div className="cart mx-28 p-4 grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Cart */}
        <div className="md:col-span-8">
          <CategoryItemList items={uniqueCartItems} isCart={true} />
        </div>
        {/* Payment Summary */}
        <div className="md:col-span-4">
          <div className="bg-white p-4 rounded-md shadow-md mt-4">
            <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
            {/* Item Total */}
            <div className="flex justify-between mb-2">
              <p>Item Total</p>
              <p> ₹{totalItemsCost.toFixed(2)}</p>
            </div>
            {/* Delivery Fee */}
            <div className="flex justify-between mb-2">
              <p>Delivery Fee</p>
              <p> ₹{deliveryFee.toFixed(2)}</p>
            </div>
            {/* Platform Fee */}
            <div className="flex justify-between mb-2">
              <p>Platform Fee</p>
              <p> ₹{platformFee.toFixed(2)}</p>
            </div>
            {/* GST */}
            <div className="flex justify-between mb-2">
              <p>GST</p>
              <p> ₹{gstAmount.toFixed(2)}</p>
            </div>
            {/* Total Amount */}
            <div className="flex justify-between mt-4">
              <p className="text-lg font-semibold">Total Amount</p>
              <p className="text-lg font-semibold"> ₹{grandTotal}</p>
            </div>
            {/* Checkout Button */}
            <button className="bg-black text-white py-2 px-4 mt-4 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
