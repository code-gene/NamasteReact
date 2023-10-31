import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "../RestaurantDetails/CategoryItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const uniqueCartItems = [];

  for (const item of cartItems) {
    // Check if the item's card.info.id is not already in uniqueCartItems
    if (
      !uniqueCartItems.some(
        (uniqueItem) => uniqueItem.card.info.id === item.card.info.id
      )
    ) {
      uniqueCartItems.push(item);
    }
  }

  console.log(uniqueCartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mx-28 p-4">
      <h1 className="text-2xl font-semibold ml-10">
        {uniqueCartItems.length == 0
          ? "No items in cart. Please add to cart"
          : ""}
      </h1>
      <div>
        <CategoryItemList items={uniqueCartItems} isCart={true} />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Cart;
