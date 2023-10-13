import axios from "axios"

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE
 const endpoint = `${API_URL_BASE}/user/update`
//  const endpoint = `http://localhost:3001/user/update`


const userBan = (value, user, accessToken) => {
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                  authorization: `Bearer ${accessToken}`
                }
              }
              await axios.put(`${endpoint}`,{...user, userBan: value}, config)
            return {message: 'Usuario baneado correctamente'}
            
           
        } catch (error) {
            return {message: 'Error al banear el usuario'}
        }

    }
}

export default userBan