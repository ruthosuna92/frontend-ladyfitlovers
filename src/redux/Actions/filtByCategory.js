import { FILT_BY_CATEGORY } from "../actionTypes";

export const filtByCategory = (category) => {
    console.log(category)
    return {
        type: FILT_BY_CATEGORY,
        payload: category
    }    
}