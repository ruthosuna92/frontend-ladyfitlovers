import axios from "axios";
import { GET_REVIEW_BY_USERID } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/review/user/`;

const getReviewsByUser = ({ userId, accessToken }) => {
  console.log(userId, accessToken);
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(endpoint + userId, config);
      return dispatch({
        type: GET_REVIEW_BY_USERID,
        payload: response.data,
        // idUser: response.data.id,
      });
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

export default getReviewsByUser;
