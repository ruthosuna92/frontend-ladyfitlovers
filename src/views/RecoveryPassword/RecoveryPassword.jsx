import { Input } from "antd"
import style from "./RecoveryPassword.module.css"

const RecoveryPassword =()=>{
    return(
        <div className={style.containerRecovery}>
            <div>
            <h1>Recuperar contraseña</h1>
             <p>Ingrese su Correo</p>
             <Input/>   
            </div>
        </div>
    )
}

export default RecoveryPassword