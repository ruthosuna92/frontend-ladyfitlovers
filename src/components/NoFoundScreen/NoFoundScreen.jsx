import style from "./NoFoundScreen.module.css"
const NoFoundScreen =()=>{
    return(
        <div className={style.NoFound}><div className={style.imgNoFound} src="../../assets/img/Nofound.jpg" /><h2>No Encontre Productos</h2></div>
    )
};
export default NoFoundScreen;