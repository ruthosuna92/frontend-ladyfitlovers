import style from "./LoadingMessage.module.css"

const LoadingMessage = () => {

    return (
        <div className={style.containerlo}>
        <div className={style.loader}></div>
        </div>
    )
}

export default LoadingMessage;