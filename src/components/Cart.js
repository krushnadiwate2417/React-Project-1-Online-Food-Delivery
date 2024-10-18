import { useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div className="text-center">
        <div className="font-bold text-2xl mt-4 p-4">Cart</div>
        <button>Clear Cart</button>
      </div>
      <MenuItemList items={cartItems} />
    </div>
  );
};

export default Cart;
