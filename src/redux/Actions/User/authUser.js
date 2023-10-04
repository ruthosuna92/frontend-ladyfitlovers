import axios from "axios";
const endpoint = "https://pf-back-production-4255.up.railway.app/loginGoogle";

const authUser = (info) => {
  return async (dispatch) => {
    try {
      await axios.post(endpoint, info);
      return { message: "Usuario ingresado correctamente" };
    } catch (error) {
      return { message: "Error al ingresar" };
    }
  };
};

export default authUser;
