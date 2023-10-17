import axios from "axios";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/order/create`;

const postOrder = ({
  userId,
  products,
  mpId,
  totalAmount,
  shippingCost,
  shippingType,
  accessToken,
}) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
      const { data } = await axios.post(
        endpoint,
        {
          userId,
          products,
          mpId,
          totalAmount,
          shippingCost,
          shippingType,
        },
        config
      );

      return {
        message: "Compra realizada correctamente",
      };
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

export default postOrder;
