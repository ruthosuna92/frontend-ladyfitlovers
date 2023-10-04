import { FILT_BY_COLOR } from "../actionTypes";

export const filtByColor = (color) => {
  console.log(color);
  return {
    type: FILT_BY_COLOR,
    payload: color,
  };
};
