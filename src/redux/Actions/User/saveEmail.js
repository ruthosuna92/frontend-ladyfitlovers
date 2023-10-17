import { SAVE_EMAIL } from "../actionTypes";

const saveEmail = (email) => {
    
    return {
        type: SAVE_EMAIL,
        payload: email
    }
}
export default saveEmail;