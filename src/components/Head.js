import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

const Head = () => {
  const [btnName, setbtnName] = useState("Login");
  const [count, setCount] = useState(0);
  const onlineStatus = useOnlineStatus();
  const { loggedIn } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const userStatus = useSelector((state) => state.user.userStatus);
  const initialLetter = useSelector((store) => store.user.initialLetter);
  const emailImage = useSelector((state) => state.user.image);
  console.log(cartItems);

  const loginFunc = () => {
    setbtnName("Logout");
  };

  return (
    <div className="heading">
      <div className="Logo-image">
        <img draggable="false" src={LOGO_URL} />
      </div>
      <div className="list-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            {initialLetter === "" ? (
              <Link to="/login">
                <btn>Login</btn>
              </Link>
            ) : (
              <div>
                <li>
                  <div className="nameLogo">
                    <div className="empty-gird-row"></div>
                    <div className="emailImage-div justify-self-center">
                      <div className="status">
                        {onlineStatus ? (
                          <div className="online" id="onlineDot"></div>
                        ) : (
                          <div className="offline " id="offlineDot"></div>
                        )}
                      </div>
                      <img
                        src={emailImage}
                        className="actualEmailImage"
                        onClick={() => {
                          setCount(count + 1);
                          const btn = document.getElementById("head-btn");
                          count % 2
                            ? btn.classList.add("hide")
                            : btn.classList.remove("hide");
                        }}
                      />
                    </div>
                    <div className="logout-btn">
                      <button className="head-login hide" id="head-btn">
                        Logout
                      </button>
                    </div>
                  </div>
                </li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
