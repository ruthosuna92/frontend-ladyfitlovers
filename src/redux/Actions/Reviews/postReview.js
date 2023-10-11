import { POST_REVIEW } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/review`;

const addingProduct = (product) => {
  console.log(product);
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, {
        userId: product.userId,
        review: [review],
      });
      const responseData = response.data;
      if (responseData.success) {
        dispatch({
          type: POST_REVIEW,
          payload: product,
        });
        return { message: "Producto agregado al carrito correctamente" };
      } else {
        return {
          message: responseData.message || "Producto no pudo ser agregado",
        };
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);

      return { message: "Producto no pudo ser agregado" };
    }
  };
};

export default addingProduct;
