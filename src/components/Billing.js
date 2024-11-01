import { useSelector } from "react-redux";

const Billing = () => {
  const cartItems = useSelector((store) => store.cart.items);

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
      <div className="text-center text-xl font-bold mt-10">
        Total Amount : {total / 100}/-
      </div>
      <div className="billing-grid w-5/12">
        <div>Net Banking</div>
        <div>UPI</div>
        <div>Card</div>
        <div>Cash On Delivery</div>
      </div>
    </div>
  );
};

export default Billing;
