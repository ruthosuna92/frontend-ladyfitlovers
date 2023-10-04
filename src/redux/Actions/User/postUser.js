import axios from "axios"

const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE
const endpoint = `${API_URL_BASE}/user/create`

const postUser = (user) => {
    return async (dispatch) => {
        try {
              await axios.post(endpoint,user)
            return {message: 'Usuario creado correctamente'}
            
           
        } catch (error) {
            return {message: 'Error al crear el usuario'}
        }

    }
}

export default postUser