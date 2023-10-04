import { PRODUCTS_PER_PAGE } from "../actionTypes";

const setProductsPerPage = (slice) => {
  return {
    type: PRODUCTS_PER_PAGE,
    payload: slice,
  };
};

export default setProductsPerPage;
