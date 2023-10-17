import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonTertiary from '../ButtonTertiary/ButtonTertiary'
import logoutUser from '../../redux/Actions/User/logoutUser'
import './userBanError.css'

const UserBanError = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

 const handleLogOut = () => {
    dispatch(logoutUser())
    navigate ("/")
    window.scrollTo(0, 0); //para que cuando se recargue la pagina vuelva al top
 }

  return (

    <div className='containerUserBan'>
        <h3 className='titleUserBan'>¡Lo sentimos pero tu cuenta ha sido bloqueda!</h3>
        <ButtonTertiary type="button" title="Cerrar Sesión" onClick={handleLogOut} /> 
        <img src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697507075/no-significa-no-mujer_23-2148576452_za4je6.jpg"/>
        
    </div>
  )
}

export default UserBanError