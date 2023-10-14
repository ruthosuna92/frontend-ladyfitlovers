import axios from "axios";
import { POST_REVIEW } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/review`;

const postReview = ({ userId, productId, reviewText, rating, accessToken }) => {
  console.log(userId, productId, reviewText, rating, accessToken);
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.post(
        endpoint,
        {
          userId,
          productId,
          reviewText,
          rating,
        },
        config
      );

      const responseData = response.data;
      if (responseData.success) {
        dispatch({
          type: POST_REVIEW,
          payload: responseData.data,
        });
        return { message: "Reseña agregada correctamente" };
      } else {
        return {
          message: responseData.message || "La reseña no pudo ser agregada",
        };
      }
    } catch (error) {
      console.error("Error al agregar la reseña:", error);

      return { message: "Reseña no agregada" };
    }
  };
};

export default postReview;
