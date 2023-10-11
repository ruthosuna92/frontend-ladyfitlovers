import axios from "axios"

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE
const endpoint = `${API_URL_BASE}/user/update`

const updateUser = (user) => {
    console.log(user);
    return async (dispatch) => {
        try {
            await axios.put(endpoint,user)
            return {message: 'Usuario editado correctamente'}
            
           
        } catch (error) {
            return {message: 'Error al editar el usuario'}
        }

    }
}

export default updateUser