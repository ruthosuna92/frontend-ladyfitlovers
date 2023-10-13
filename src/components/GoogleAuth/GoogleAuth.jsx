import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import "./GoogleAuth.css";
import authUser from "../../redux/Actions/User/authUser";
import { Button } from "antd";
import getCart from "../../redux/Actions/ShoppingCart/getCart";



const clientId =
  "521123783257-d2stfpejph6ok0djqqpm8e396dsg10c5.apps.googleusercontent.com";

const GoogleAuth = ({ onGoogleLoginSuccess }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id)
  const accessToken2 = useSelector((state) => state.accessToken)
 console.log(userId);
  const onSuccess = async (res) => {
    let profileObj = res.profileObj;
    let accessToken = res.accessToken;
    if (profileObj.familyName == undefined) {
      profileObj.familyName = "No definido";
    }
    //userId, token, profileObj
    dispatch(authUser(profileObj, accessToken));
    if(userId && accessToken2){
      console.log('entré al if');
      dispatch(getCart(userId, accessToken2))
    }
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
