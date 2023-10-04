import { GoogleLogin } from "react-google-login";
import authUser from "../../redux/Actions/User/authUser";

const clientId =
  "521123783257-d2stfpejph6ok0djqqpm8e396dsg10c5.apps.googleusercontent.com";

const GoogleAuth = () => {
  const onSuccess = (res) => {
    console.log("Login Success! current user: ", res.profileObj);
    let info = res.profileObj;
    if (info.familyName == undefined) {
      info.familyName = "No definido";
    }
    authUser(info);
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
