import { useState } from "react";
import MenuItemList from "./MenuItemList";

const MenuTitles = ({ menuData }) => {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <div className=" cursor-pointer w-5/12 m-auto p-4 shadow-lg bg-gray-200 my-4">
        <div className=" flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {menuData.title}({menuData?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showList && <MenuItemList items={menuData?.itemCards} />}</div>
      </div>
    </div>
  );
};

export default MenuTitles;
