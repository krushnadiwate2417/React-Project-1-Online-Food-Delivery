import useRestroMenuAPI from "../utils/useRestroMenuAPI";
import MenuTitles from "./MenuTitles";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestroMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestroMenuAPI(resId);

  const [showIndex, setShowIndex] = useState(null);
  //const [count, setCount] = useState(false);
  // console.log(count);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, sla, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="w-full text-center">
      <div className="w-5/12 m-auto p-4 flex justify-between border-b border-solid border-black">
        <div>
          <h1 className="text-4xl">{name}</h1>
          <ul className="text-left">
            <li>{sla.deliveryTime} minutes</li>
            <li>{avgRating}⭐</li>
          </ul>
        </div>
        <div className="self-center">
          <h3>{cuisines.join(", ")}</h3>
        </div>
      </div>
      <div>
        {categories.map((c, index) => (
          <MenuTitles
            key={c?.card?.card.title}
            menuData={c?.card?.card}
            showList={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            //setCount={() => setCount(!count)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestroMenu;
