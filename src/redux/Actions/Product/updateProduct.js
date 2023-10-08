import axios from "axios";
import { POST_PRODUCT } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/product/update`;
// const endpoint = `http://localhost:3001/product/update`;

const updateProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(endpoint, product);

      return { message: "Producto editado correctamente" };
    } catch (error) {
      return { message: "El producto no pudo ser editado" };
    }
  };
};

export default updateProduct;
