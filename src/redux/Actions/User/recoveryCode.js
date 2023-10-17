import axios from "axios"
const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/user/recovery`;


const recoveryCode = async (email) => {

  try {
    const response = await axios.post(endpoint, email);
    return response

  } catch (error) {
    return { message: error.message };
  }

};

export default recoveryCode;
