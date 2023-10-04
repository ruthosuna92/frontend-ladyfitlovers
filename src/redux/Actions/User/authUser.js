import axios from "axios";
const endpoint =
  "https://pf-back-production-4255.up.railway.app/user/loginGoogle";

const authUser = (profileObj, accessToken) => {
  return async (dispatch) => {
    try {
      await axios.post(endpoint, { profileObj, accessToken });
      console.log(endpoint);
      console.log(profileObj);
      console.log(accessToken);
      return { message: "Usuario ingresado correctamente" };
    } catch (error) {
      return { message: "Error al ingresar" };
    }
  };
};

export default authUser;
