import axios from "axios";
const endpoint =
  "https://pf-back-production-4255.up.railway.app/user/loginGoogle";
const endpoint2 = "https://pf-back-production-4255.up.railway.app/user/";

const authUser = (profileObj, accessToken) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, { profileObj, accessToken });
      const id = data.idUser;
      const response = await axios.get(endpoint2 + id);
      console.log(profileObj);
      console.log(accessToken);
      console.log(response.data);
      return dispatch({
        type: LOGIN_USER,
        payload: response.data,
        message: "Usuario ingresado correctamente",
      });
    } catch (error) {
      return { message: "Error al ingresar" };
    }
  };
};

export default authUser;
