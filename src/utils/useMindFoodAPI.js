import { useState, useEffect } from "react";
import { RESTRO_API } from "./constants";

const useMindFoodAPI = (foodid) => {
  const [foodInfo, setFoodInfo] = useState(null);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const data = await fetch(RESTRO_API,{mode: "no-cors"});
    const jsonData = await data.json();
    setFoodInfo(jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };
};

export default useMindFoodAPI;
