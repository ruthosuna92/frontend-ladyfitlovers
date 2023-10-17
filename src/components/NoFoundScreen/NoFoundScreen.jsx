import style from "./NoFoundScreen.module.css"
const NoFoundScreen =({text})=>{
    return(
        <div className={style.NoFound}><div className={style.imgNoFound} src="../../assets/img/Nofound.jpg" /><h2>{text}</h2></div>
    )
};
export default NoFoundScreen;