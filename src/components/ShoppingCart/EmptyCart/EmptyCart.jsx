
import style from "./EmptyCart.module.css"

const EmptyCart = () => {
    
    return <div className={style.NoFound}><div className={style.imgNoFound} /><h2>No Se Encontraron Productos</h2>
    </div>
}

export default EmptyCart