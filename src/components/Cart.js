import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const userStatus = useSelector((state) => state.user.userStatus);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };

  let arr = [];
  cartItems.map((item) => {
    arr.push(
      item?.card?.info?.price ||
        item?.card?.info?.variantsV2?.pricingModels[0]?.price
    );
  });

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
  }

  return (
    <div>
      <div className="w-full text-center">
        {cartItems.length === 0 ? (
          <div className="font-bold text-2xl mt-4 p-4">
            Cart is Empty{" "}
            <img
              className="empty-cart-image"
              src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
            />
          </div>
        ) : userStatus === "" ? (
          <div className="loginPlusbill">
            <div>
              <LoginForm />
            </div>
            <div>
              <div className="list-none w-full">
                <MenuItemList items={cartItems} />
                <div className="billGriding">
                <div>
                  {cartItems.map((item,index) => {
                    return <li key={index}> {item?.card?.info?.name}</li>;
                  })}
                  <h2 className="mt-4 font-bold">Total</h2>
                </div>
                <div>
                  {cartItems.map((item,index) => {
                    return (
                      <li key={index}>
                        {" "}
                        Rs.{" "}
                        {item?.card?.info?.price / 100 ||
                          item?.card?.info?.variantsV2?.pricingModels[0]
                            ?.price / 100}
                      </li>
                    );
                  })}
                  <h2 className="mt-4 font-bold">
                    Rs.
                    {arr.length === 0 ? null : Number(total) / 100}
                  </h2>
                </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <div className="font-bold text-2xl mt-4 p-4">Cart</div>
              <button
                onClick={() => {
                  handleClick();
                }}
                className="clear-cart rounded-3xl font-bold p-3"
              >
                Clear Cart
              </button>
            </div>
            <div className="cart-full-page">
              <div className="w-9/12 m-auto">
                <MenuItemList items={cartItems} />
              </div>
              <div className=" border-t-2 mt-4 w-7/12 m-auto">
                <h1 className="font-bold text-lg text-center">Bill</h1>
                <div className="flex justify-between list-none w-full">
                  <div>
                    {cartItems.map((item,index) => {
                      return <li key={index}> {item?.card?.info?.name}</li>;
                    })}
                    <h2 className="mt-4 font-bold">Total</h2>
                  </div>
                  <div>
                    {cartItems.map((item,index) => {
                      return <li key={index}> Rs. {item?.card?.info?.price / 100}</li>;
                    })}
                    <h2 className="mt-4 font-bold">
                      Rs.
                      {arr.length === 0 ? null : total / 100}
                    </h2>
                  </div>
                </div>
                <Link to={"/billing"}>
                  <button className=" checkout text-center w-full mt-4 p-3 font-bold rounded-3xl border-black">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
