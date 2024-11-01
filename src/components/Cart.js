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

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return (
    <div>
      <div className="w-full text-center">
        {cartItems.length === 0 ? (
          <div className="font-bold text-2xl mt-4 p-4">Cart is Empty</div>
        ) : (
          <div className="font-bold text-2xl mt-4 p-4">Cart</div>
        )}
        {cartItems.length === 0 ? null : (
          <button
            onClick={() => {
              handleClick();
            }}
            className="clear-cart rounded-3xl font-bold p-3"
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 ? null : (
        <div className="cart-full-page">
          <div className="w-9/12 m-auto">
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
                  {arr.length === 0 ? null : total / 100}
                </h2>
              </div>
            </div>
            <button className=" checkout text-center w-full mt-4 p-3 font-bold rounded-3xl border-black">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
