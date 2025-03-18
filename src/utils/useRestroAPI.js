import { RESTRO_API } from "./constants";
import { useState, useEffect } from "react";

const useRestroAPI = () => {
  const [list1, setList1] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRO_API,{mode: "no-cors"});
    const json = await data.json();
    setList1(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return list1;
};

export default useRestroAPI;
