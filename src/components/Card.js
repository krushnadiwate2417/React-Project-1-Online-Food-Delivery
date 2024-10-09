import { CDN_IMG_URL } from "../utils/constants";

const Card = (props) => {
  const { resdata } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resdata?.info;
  return (
    <div className="card">
      <img
        className="card-image"
        alt="any"
        src={CDN_IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <ul className="card-list">
        <li>{avgRating} stars</li>
        <li>{sla.deliveryTime} minutes</li>
      </ul>
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
