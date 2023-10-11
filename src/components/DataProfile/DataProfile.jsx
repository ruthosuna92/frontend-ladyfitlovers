import { useDispatch, useSelector } from "react-redux";
import style from "./DataProfile.module.css"
const Profile = () => {
    const infouser = useSelector((state) => state.user)
    console.log(infouser)

    return (
        <div className={style.contianerProfiler}>
            <div className={style.subcontainer}>
                {
                    !infouser.image ? <img className={style.profileimg} src="../../assets/img/user.png" alt="" />:
                    <img className={style.profileimg} src={infouser.image} alt="" />
                }
                <div className={style.containerDataName}>
                    <div className={style.nameContainer}>
                        <label htmlFor="name">Nombre</label>
                        <span className={style.dataNameAndSurname} id="name">{infouser.name}</span>
                    </div>
                    <div className={style.nameContainer}>
                        <label htmlFor="surmane">Apellido</label>
                        <span className={style.dataNameAndSurname} id="surmane">{infouser.surname}</span>
                    </div>
                </div>
                <div className={style.containerDataName}>
                    <div className={style.nameContainer}>
                        <label htmlFor="email">E-mail</label>
                        <div className={style.controlle}>
                            <span className={style.dataEmail}>{infouser.email}</span>
                        </div>
                    </div>
                    <div className={style.nameContainer}>
                        <label htmlFor="">Telefono</label>
                        <span className={style.dataNameAndSurname}>{infouser.phone}</span>
                    </div>
                </div>
                <div className={style.containerDataName}>
                    <div className={style.nameContainer}>
                        <label htmlFor="">Dirección</label>
                        <span className={style.dataaddres}>{infouser.address}</span>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Profile;