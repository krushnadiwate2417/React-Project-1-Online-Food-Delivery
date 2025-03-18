import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/userSlice";

const LoginForm = () => {
  const [loginOrSignup, setLoginOrSignup] = useState("Login");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeStatus());
  };

  const handleSignup = () => {
    const signupName = document.getElementById("signupName");
    signupName.classList.remove("hide");
    const signupEmail = document.getElementById("signupEmail");
    signupEmail.classList.remove("hide");
    setLoginOrSignup("Sign Up");
  };

  const handleLogin = () => {
    const signupName = document.getElementById("signupName");
    signupName.classList.add("hide");
    const signupEmail = document.getElementById("signupEmail");
    signupEmail.classList.add("hide");
    setLoginOrSignup("Login");
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <form action="" className="loginForm mx-32 mt-9">
          <h2 className="font-bold text-2xl text-center loginHeadinginForm">{loginOrSignup}</h2>
          <input
            placeholder="Phone Number"
            name="PhoneNumber"
            required="required"
            className=" text-center inputItem"
          />
          <input
            placeholder="Name"
            className="hide text-center inputItem"
            id="signupName"
            name="Name"
            required="required"
          />
          <input
            placeholder="Email"
            className="hide text-center inputItem"
            id="signupEmail"
            name="Email"
            required="required"
          />
          <input
            className="loginFormBtn font-bold"
            type="submit"
            value={loginOrSignup}
            onClick={() => {
              handleClick();
            }}
          />
        </form>
      </div>
      <div className="flex justify-center">
      <p>
        or want to{" "}
        <span
          className=" signP hover:cursor-pointer hover:underline mt-2 text-center"
          onClick={() => {
            loginOrSignup === "Login" ? handleSignup() : handleLogin();
          }}
        >
          <b>{loginOrSignup === "Login" ? "Sign Up" : "Login"}</b>
        </span>
      </p>
      </div>

      <div className="flex justify-center">___________ OR ___________</div>
      <div className=" justify-self-center">
        <GoogleSignIn />
      </div>
    </div>
  );
};

export default LoginForm;
