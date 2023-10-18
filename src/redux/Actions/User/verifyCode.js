import axios from "axios"
const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/user/recoverPassword`;
const verifyCode = async (email,code) => {
    const codeNumber = code.toString();
    console.log(email);
    console.log(typeof codeNumber);
      try {
        const response = await axios.put(endpoint,{email:email, code:codeNumber});
        return response.data
    
      } catch (error) {
        return { message: error.message };
      }
    
  };
  
  export default verifyCode;