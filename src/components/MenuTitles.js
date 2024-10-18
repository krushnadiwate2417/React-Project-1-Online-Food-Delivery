import { useState } from "react";
import MenuItemList from "./MenuItemList";

const MenuTitles = ({ menuData, showList, setShowIndex, setCount }) => {
  let count = 0;
  return (
    <div>
      <div
        className=" cursor-pointer w-5/12 m-auto p-4 shadow-lg bg-gray-200 my-4"
        onClick={() => {
          setShowIndex();
          //setCount();
        }}
      >
        <div className=" flex justify-between">
          <span className="font-bold">
            {menuData.title}({menuData?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div className="cursor-default">
          {showList && <MenuItemList items={menuData?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default MenuTitles;
