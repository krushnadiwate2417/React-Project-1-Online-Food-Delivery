import useMindFoodAPI from "../utils/useMindFoodAPI";
import { useParams } from "react-router-dom";

const MindCards = () => {
  const { foodid } = useParams();
  const foodInfo = useMindFoodAPI(foodid);
};

export default MindCards;
