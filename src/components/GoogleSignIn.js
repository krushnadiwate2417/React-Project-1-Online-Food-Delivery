import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { changeStatus, initialLetter, image } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const GoogleSignIn = () => {
  const dispatch = useDispatch();

  const handleSuccess = (credentialResponse) => {
    console.log("SIgn in Sucess", credentialResponse);
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log(decoded);
    dispatch(changeStatus());
    dispatch(initialLetter(decoded?.email[0]));
    dispatch(image(decoded?.picture));
  };

  const handleError = () => {
    console.log("Error in signing in");
  };
  return (
    <div>
      <GoogleOAuthProvider clientId="968688470973-b98bdbednjlfh3qa1a6m3rfhcmuad66q.apps.googleusercontent.com">
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleSignIn;
