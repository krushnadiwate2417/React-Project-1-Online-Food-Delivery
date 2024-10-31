import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };

  let arr = [];
  cartItems.map((item) => {
    arr.push(item?.card?.info?.price);
  });

  return (
    <div>
      <div className="w-full text-center">
        <div className="font-bold text-2xl mt-4 p-4">Cart</div>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-5/12 m-auto">
        <MenuItemList items={cartItems} />
      </div>
      <div className=" border-t-2 mt-4 w-5/12 m-auto">
        <h1 className="font-bold text-lg text-center">Bill</h1>
        <div className="flex justify-between list-none w-full">
          <div>
            {cartItems.map((item) => {
              return <li> {item?.card?.info?.name}</li>;
            })}
            <h2 className="mt-4 font-bold">Total</h2>
          </div>
          <div>
            {cartItems.map((item) => {
              return <li> Rs. {item?.card?.info?.price / 100}</li>;
            })}
            <h2 className="mt-4 font-bold">
              Rs.
              {arr.length === 0 ? null : arr.reduce((x) => x + (x + 1)) / 100}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
