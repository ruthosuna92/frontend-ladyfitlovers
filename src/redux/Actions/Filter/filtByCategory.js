import { FILT_BY_CATEGORY } from "../actionTypes";

export const filtByCategory = (category) => {
  return {
    type: FILT_BY_CATEGORY,
    payload: category,
  };
};
