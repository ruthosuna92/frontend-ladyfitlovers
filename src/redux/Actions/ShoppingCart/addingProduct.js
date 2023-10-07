import { ADDING_PRODUCT } from "../actionTypes";

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/cart/add`;

const addingProduct = (product) => {
  console.log(product);
  return async (dispatch) => {
    try {
      //   const { data } = await axios.post(endpoint, [product]);

      //   dispatch({
      //     type: ADDING_PRODUCT,
      //     payload: product,
      //   });
      //   return { message: "Producto agregado al carrito correctamente" };

      const response = await axios.post(endpoint, {
        userId: product.userId,
        products: [product],
      });
      const responseData = response.data;
      if (responseData.success) {
        dispatch({
          type: ADDING_PRODUCT,
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
