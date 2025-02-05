import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="w-6/12 m-auto">
        <div className="flex flex-col items-center ">
          <h1 className="font-bold text-center text-3xl mt-5">Cart</h1>
          <button
            className="border border-black rounded bg-black text-white py-1 text-sm px-1 mt-4"
            onClick={handleClearCart}
          >
            Empty Cart
          </button>
          {cartItems.length === 0 && (
            <h1 className="mt-5 font-bold text-2xl">
              Cart is empty.Add some items to the cart.
            </h1>
          )}
        </div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
