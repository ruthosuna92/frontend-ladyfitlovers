import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <div>
                {/* <Link to='/'><img src={logo} /></Link> */}
            </div>
            <div>
                <Link to='/'>Inicio</Link>
                <Link to='/products'>Productos</Link>
                <Link to='/contact'>Contacto</Link>
            </div>
        </div>
    )
}

export default NavBar