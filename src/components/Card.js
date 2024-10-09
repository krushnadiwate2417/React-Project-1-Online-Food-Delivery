import { CDN_IMG_URL } from "../utils/constants";
import { useState } from "react";
import ViewMenu from "./ViewMenu";
const Card = (props) => {
  const [cardHover, setCardHover] = useState(false);

  const { resdata } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resdata?.info;

  return (
    <div
      className="card"
      onMouseEnter={() => {
        setCardHover(true);
      }}
      onMouseLeave={() => {
        setCardHover(false);
      }}
    >
      <img
        className="card-image"
        alt="any"
        src={CDN_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg mt-4">{name}</h3>
      <h5 className="mt-2 text-sm text-gray-600">{cuisines.join(", ")}</h5>
      <ul className="card-list flex gap-2 justify-between text-center mt-2">
        <li>
          <h4 className="font-semibold ">Rating</h4>
          {avgRating} stars
        </li>
        <li>
          <h4 className="font-semibold">Delivery</h4>
          {sla.deliveryTime} minutes
        </li>
      </ul>
      <div className=" text-center mt-3 font-bold">
        {cardHover && <ViewMenu />}
      </div>
    </div>
  );
};
export const offerRestro = (Card) => {
  return (props) => {
    const { resdata } = props;
    const { aggregatedDiscountInfoV3 } = resdata?.info;
    return (
      <div className="label-div">
        <label className="label-card">
          {aggregatedDiscountInfoV3.header +
            " " +
            aggregatedDiscountInfoV3.subHeader}
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
