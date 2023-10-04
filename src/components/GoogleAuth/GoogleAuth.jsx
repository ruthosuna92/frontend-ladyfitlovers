import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

import authUser from "../../redux/Actions/User/authUser";

const clientId =
  "521123783257-d2stfpejph6ok0djqqpm8e396dsg10c5.apps.googleusercontent.com";

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    console.log("Login Success! current user: ", res.profileObj);
    let profileObj = res.profileObj;
    let accessToken = res.accessToken;
    if (profileObj.familyName == undefined) {
      profileObj.familyName = "No definido";
    }
    console.log(accessToken);
    //userId, token, profileObj
    return dispatch(authUser(profileObj, accessToken));
  };

  const onFailure = (res) => {
    console.log("Login Failed: res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiesPolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleAuth;
