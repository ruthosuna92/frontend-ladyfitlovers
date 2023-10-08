import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import "./GoogleAuth.css";
import authUser from "../../redux/Actions/User/authUser";
import { Button } from "antd";

const clientId =
  "521123783257-d2stfpejph6ok0djqqpm8e396dsg10c5.apps.googleusercontent.com";

const GoogleAuth = ({ onGoogleLoginSuccess }) => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    let profileObj = res.profileObj;
    let accessToken = res.accessToken;
    if (profileObj.familyName == undefined) {
      profileObj.familyName = "No definido";
    }
    //userId, token, profileObj
    dispatch(authUser(profileObj, accessToken));
    onGoogleLoginSuccess();
  };

  const onFailure = (res) => {
    console.log("Login Failed: res: ", res);
  };

  return (

      <div id="signInButton" className="googleButton">
        
        <GoogleLogin
          clientId={clientId}
          buttonText="Iniciar con Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiesPolicy={"single_host_origin"}
          isSignedIn={true}
          
        />
      </div>

  );
};

export default GoogleAuth;
