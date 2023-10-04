import { useDispatch, useSelector } from "react-redux";
import style from "./Profile.module.css"

const Profile = () => {
    const infouser = useSelector((state) => state.user)
    console.log(infouser)
    return (
        <div className={style.contianerProfiler}>
            <h1>Mi perfil</h1>
            <div className={style.subcontainer}>
                <img className={style.profileimg} src="" alt="" />
                <div className={style.containerDataName}>
                    <div className={style.nameContainer}>
                        <label htmlFor="nombre">Nombre</label>
                        <span className={style.dataNameAndSurname} id="nombre">{infouser.name}</span>
                    </div>
                    <div className={style.nameContainer}>
                        <label htmlFor="apellido">Apellido</label>
                        <span className={style.dataNameAndSurname} id="apellido">{infouser.surname}</span>
                    </div>
                </div>
                <div className={style.containerDataName}>
                    <span className={style.dataEmail}>{infouser.email}</span>
                    <span className={style.dataNameAndSurname}>{infouser.phone}</span>
                </div>
                <div className={style.containerDataName}>
                    <span className={style.dataNameAndSurname}>provincia</span>
                    <span className={style.dataNameAndSurname}>{infouser.address}</span>
                </div>
            </div>
        </div>
    )
};
export default Profile;