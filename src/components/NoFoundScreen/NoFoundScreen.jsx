import style from "./NoFoundScreen.module.css"
const NoFoundScreen = () => {
    return (
        <div className={style.NoFound}>
            <div className={style.imgNoFound}  />
            <h2>No Se Encontraron Productos</h2>
        </div>
    )
};
export default NoFoundScreen;