import axios from "axios";
import { USER_BY_ID } from "../../actionTypes";

const endpoint = "https://pf-back-production-4255.up.railway.app/user/";

const userById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint + id);
       return dispatch({
        type: USER_BY_ID,
        payload: response.data,
        idUser: response.data.id,
      });
      console.log("User by ID data:", response.data);
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with status code:",
          error.response.status
        );
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
};

export default userById;
