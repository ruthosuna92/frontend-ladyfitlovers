import { SET_NAME } from "../actionTypes";

const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

export default setName;
