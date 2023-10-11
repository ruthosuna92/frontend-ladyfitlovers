import { SAVE_FILTERS } from "../actionTypes";

export const saveFilter = (uniqueFilters) => {
  return {
    type: SAVE_FILTERS,
    payload: uniqueFilters,
  };
};
