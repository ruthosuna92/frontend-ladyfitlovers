import { SET_PAGE } from "../actionTypes";

const setCurrentPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export default setCurrentPage;
