import { useEffect, useState, useContext } from "react";
import Card, { offerRestro } from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTRO_API } from "../utils/constants";
import useRestroAPI from "../utils/useRestroAPI";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import WhatsOnMind from "./WhatsOnMind";

const Body = () => {
  // const list1 = useRestroAPI();
  // console.log(list1);
  const [list1, setList1] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  const [search, setSearch] = useState("");
  // Conditional Rendering
  // if (list1.length === 0) {
  //   return <Shimmer />;
  // }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRO_API);
    const json = await data.json();
    setList1(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const OfferdRestro = offerRestro(Card);

  if (useOnlineStatus() === false) {
    return <h1>YOU are OFFLINE ! CHECK internet.</h1>;
  }
  const { loggedIn, setUserName } = useContext(UserContext);

  // if (list1.length === 0) {
  //   return <Shimmer />;
  // }
  // Contional Rendering using Turnary Operator where ?-(then) and : means Otherwise
  return list1.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <WhatsOnMind />
      <div className="filter">
        <div>
          <button
            className="back-btn hide"
            id="back"
            onClick={() => {
              const removeClass2 = document.getElementById("back");
              removeClass2.classList.add("hide");
              const backList = list1;
              setFilteredRestro(backList);
            }}
          >
            Back
          </button>
        </div>
        <div className="Search">
          <input
            type="text"
            className="Searchbox"
            placeholder="Find What you Love..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={(res) => {
              const removeClass = document.getElementById("back");
              removeClass.classList.remove("hide");
              const filterdSearch = list1.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });
              setFilteredRestro(filterdSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const removeClass = document.getElementById("back");
            removeClass.classList.remove("hide");
            const filterList = filteredRestro.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filterList);
            setFilteredRestro(filterList);
          }}
        >
          Top Rated Resto
        </button>
        <label>Change UserName Live : </label>
        <input
          className="border border-black"
          value={loggedIn}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="resContainer">
        {filteredRestro.map((restro) => (
          <Link key={restro.info.id} to={"/restaurants/" + restro.info.id}>
            {restro.info.aggregatedDiscountInfoV3 != null ? (
              <OfferdRestro resdata={restro} />
            ) : (
              <Card resdata={restro} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
