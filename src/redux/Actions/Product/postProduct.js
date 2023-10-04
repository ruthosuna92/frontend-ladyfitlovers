import axios from "axios";
import { POST_PRODUCT } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/product/create`;

const postProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, [product]);

      return { message: "Producto creado correctamente" };
    } catch (error) {
      return { message: "Producto no pudo ser creado" };
    }
  };
};

export default postProduct;
