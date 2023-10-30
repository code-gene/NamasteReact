import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "../RestaurantDetails/CategoryItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart())
    };
    return (
      <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                <CategoryItemList items={cartItems}/>
            </div>
      </div>
    );
}

export default Cart;