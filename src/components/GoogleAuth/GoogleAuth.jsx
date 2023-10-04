import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

import authUser from "../../redux/Actions/User/authUser";

const clientId =
  "521123783257-d2stfpejph6ok0djqqpm8e396dsg10c5.apps.googleusercontent.com";

const GoogleAuth = (props) => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    let profileObj = res.profileObj;
    let accessToken = res.accessToken;
    if (profileObj.familyName == undefined) {
      profileObj.familyName = "No definido";
    }
    //userId, token, profileObj
   return dispatch(authUser(profileObj, accessToken));
    // return props.onClose();
  };

  const onFailure = (res) => {
    console.log("Login Failed: res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={ () => {onSuccess, props.onClose()}}
        onFailure={onFailure}

        cookiesPolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleAuth;
