const MenuItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className=" border-b border-solid border-black shadow-lg text-left"
          key={item?.card?.info?.id}
        >
          <li className="list-none pt-2 mt-2">
            <div className="mb-2">
              {item?.card?.info?.name}
              {"  |  "}
              Rs.
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}
            </div>
          </li>
          <p className="mb-3 text-xs">{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
