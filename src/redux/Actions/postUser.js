import axios from "axios"
const endpoint = "https://pf-back-production-4255.up.railway.app/user/create"

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