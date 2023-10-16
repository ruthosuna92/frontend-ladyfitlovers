import style from './MenuBurger.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import setMenuBurger from '../../redux/Actions/MenuBurger/setMenuBurger';

const MenuBurger = () => {

    const navigate = useNavigate()
    const handleChange = (event) => {
        // setCountryName(event.target.value)
    }
    const dispatch = useDispatch()

    const handleSearch = () => {
    }
    return (
        <div className={style.container}>
            <div className={style.menuBurger}>
                <div className={style.buttons}>
                    <NavLink to={"/"} onClick={() => {
                        dispatch(setMenuBurger())
                        return;
                    }} className={style.tags}><h3>Inicio</h3></NavLink>
                    <NavLink to={"/products"} onClick={() => {
                        dispatch(setMenuBurger())
                        return;
                    }} className={style.tags}><h3>Productos</h3></NavLink>
                    <NavLink to={"/contacto"} onClick={() => {
                        dispatch(setMenuBurger())
                        return;
                    }} className={style.tags}><h3>Contacto</h3></NavLink>
                </div>
            </div>
        </div>
    )
}

export default MenuBurger;