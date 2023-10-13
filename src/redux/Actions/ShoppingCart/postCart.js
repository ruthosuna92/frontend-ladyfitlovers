import axios from "axios";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/cart/add`;

const postCart = ({ userId, products, accessToken }) => {

  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
      const { data } = await axios.put(endpoint, {
        userId,
        products
      },
      config
      );
      console.log(data);
      return {
        message: "Compra realizada correctamente",
      };
    } catch (error) {
      console.error("Error adding product to cart:", error);

      return { message: "Producto no pudo ser agregado" };
    }
  };
};

export default postCart;
