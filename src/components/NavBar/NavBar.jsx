import React from 'react'
import logo from ''

const NavBar = () => {
    return (
        <div>
            <div>
                <Link to='/'><img src={logo} /></Link>
            </div>
            <div>
                <Link to='/Home'>Inicio</Link>
                <Link to='/Products'>Productos</Link>
                <Link to='/contact'>Contacto</Link>
            </div>
        </div>
    )
}

export default NavBar