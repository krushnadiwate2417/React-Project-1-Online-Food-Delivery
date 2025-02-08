import { useState, useEffect } from "react";
import { RESTRO_API, WHATSONMIND_IMG_ID } from "../utils/constants";
import { Link } from "react-router-dom";
import MindShimmer from "./MindShimmer";

const WhatsOnMind = () => {
  const [mindList, setMindList] = useState([]);
  const[nextVal,setNextVal] = useState(0);
  const[backState,setBackState] = useState("hideVisibility")
  const [nextState,setNextState] = useState("")

  useEffect(() => {
    apicalling();
  }, []);

  useEffect(()=>{
    console.log(nextVal)
    if(nextVal > 0){
      setBackState("")
    }
    if(nextVal == 15){
      setNextState("hideVisibility")
    }
    if(nextVal < 15){
      setNextState("")
    }
    if(nextVal == 0){
      setBackState("hideVisibility")
    }
  },[nextVal])

  const apicalling = async () => {
    const menu = await fetch(RESTRO_API);
    const mindJson = await menu.json();
    console.log("Mind",mindJson?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setMindList(mindJson?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  const fir = mindList.slice(nextVal,nextVal+5)
  console.log("fir",fir);
  console.log("inMind",mindList);

  return (
    <>
    <div className="mindGrid">
      <div className="headingMind">
        <h2>Cannot Decide What to Have ?</h2>
        <h4>Have a look Here...</h4>
      </div>
      <div className="mindFlex">
      <div>
        <button className={backState} onClick={()=>{
          setNextVal(curr=>curr-5)
        }}>Back</button>
      </div>
      <div className="mindImgDiv listFlex flex list-none gap-4">
        {mindList.length == 0 ? <MindShimmer/> : fir.map((x) => (
          <li key={x.id}>
            <Link to={"/mindFood/" + x.id}>
              <img src={WHATSONMIND_IMG_ID + x.imageId} className="imgMind" />
            </Link>
          </li>
        ))}
      </div>
        <div>
          <button className={nextState} onClick={()=>{
            setNextVal(curr=>curr+5)
          }}>Next</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default WhatsOnMind;
