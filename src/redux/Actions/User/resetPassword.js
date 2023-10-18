import axios from "axios"
const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/user/recoverPassword/reset`;


const resetPassword = async (email,newPassword ) => {
    console.log(email);
    console.log(newPassword);
  try {
    const response = await axios.put(endpoint, {email: email, password:newPassword});
    return response.data
  } catch (error) {
    return { message: error.message };
  }

};

export default resetPassword;