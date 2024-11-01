import { useState, useEffect } from "react";
import { RESTRO_API, WHATSONMIND_IMG_ID } from "../utils/constants";
import { Link } from "react-router-dom";

const WhatsOnMind = () => {
  const [mindList, setMindList] = useState([]);
  useEffect(() => {
    apicalling();
  }, []);

  const apicalling = async () => {
    const menu = await fetch(RESTRO_API);
    const mindJson = await menu.json();
    console.log(mindJson?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setMindList(mindJson?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  return (
    <div>
      <div className="flex list-none">
        {mindList.map((x) => (
          <li key={x.id}>
            <Link to={"/mindFood/" + x.id}>
              <img src={WHATSONMIND_IMG_ID + x.imageId} />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default WhatsOnMind;
