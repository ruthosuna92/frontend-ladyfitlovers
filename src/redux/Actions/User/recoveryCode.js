import axios from "axios"
const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/user/recoverPassword`;


const recoveryCode = async (email) => {
 console.log(email);
  try {
    const response = await axios.put(endpoint, {email:email});
    return response.data

  } catch (error) {
    return { message: error.message };
  }

};

export default recoveryCode;
