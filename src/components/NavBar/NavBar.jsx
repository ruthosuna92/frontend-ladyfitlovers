import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./navBar.css"
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import logo from '/svg/LADYFIT1.svg'

const NavBar = () => {
    const location = useLocation()

    return (
        <>
            <div className='navBarContainer'>
                <div className='navBarLinksContainer'>

                    <Link to='/'><img src={logo} /></Link>

                    <Link to='/'>
                        <button
                            className={
                                location.pathname === "/"
                                    ? "buttonLinkActive"
                                    : "navBarButton"
                            }
                            title="Inicio"
                        >
                            Inicio
                        </button>
                    </Link>
                    <Link to='/products'>
                        <button
                            className={
                                location.pathname === "/products"
                                    ? "buttonLinkActive"
                                    : "navBarButton"
                            }
                            title="Products"
                        >
                            Productos
                        </button>
                    </Link>
                    <Link to='/contacto'>
                        <button
                            className={
                                location.pathname === "/contacto"
                                    ? "buttonLinkActive"
                                    : "navBarButton"
                            }
                            title="Contact"
                        >
                            Contacto
                        </button>
                    </Link>
                </div>
                <div>
                    <ButtonPrimary title='Iniciar Sesión' onClick={()=> {}} />
                </div>
            </div>
        </>
    )
}

export default NavBar