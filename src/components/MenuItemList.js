import { useDispatch } from "react-redux";
import { MENU_IMG_ID } from "../utils/constants";
import { addItems } from "../redux/cartSlice";

const MenuItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className=" border-b border-solid border-black shadow-lg text-left flex justify-between"
          key={item?.card?.info?.id}
        >
          <div>
            <li className="list-none pt-4 pl-4 mt-2">
              <div className="mb-2">
                {item?.card?.info?.name}
                {"  |  "}
                Rs.
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </div>
            </li>
            <p className="mb-3 text-xs pl-4">{item?.card?.info?.description}</p>
          </div>
          <div>
            <img
              className="max-w-32 p-4"
              src={MENU_IMG_ID + item?.card?.info?.imageId}
            />
            <button
              className="bg-black text-white rounded-md text-sm m-0 add-button"
              onClick={() => handleAddItem(item)}
            >
              +ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
