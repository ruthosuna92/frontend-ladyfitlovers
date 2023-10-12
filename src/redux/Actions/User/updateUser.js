import axios from "axios"

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE
const endpoint = `${API_URL_BASE}/user/update`

const updateUser = (user, accessToken) => {
    console.log(user)
    console.log(accessToken);
    return async (dispatch) => {
        const config = {
            headers: {
              authorization: `Bearer ${accessToken}`
            }
        }
        try {
            await axios.put(endpoint, user, config)
            return {message: 'Usuario editado correctamente'}
            
           
        } catch (error) {
            return {message: 'Error al editar el usuario'}
        }

    }
}

export default updateUser