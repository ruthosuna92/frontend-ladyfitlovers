import setCurrentPage from "../../redux/Actions/Filter/setCurrentPage"
import { useDispatch, useSelector } from "react-redux"
import { Button } from 'antd';

import style from "./Pagination.module.css"

const Pagination = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.currentPage)
    const totalButtons = useSelector((state) => state.totalButtons)

    const range = (start, stop, step) => //función para crear un arreglo de números que vayan incrementando hasta totalButtons
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
    const totalButtonsArray = range(1, totalButtons, 1) //ejecuto la función para que se cree el arreglo con los parámetros que le pase
    let buttonsPerRender = 3
    let startIndex = currentPage - 1
    let endIndex = startIndex + buttonsPerRender

    const buttons = (totalButtonsArray) => {
        
        let botonesNum = null

        if (currentPage >= totalButtonsArray.length - 2 && currentPage >= 2) {
            botonesNum = totalButtonsArray.slice(totalButtonsArray.length - 3)
            return botonesNum
        } else {
            botonesNum = totalButtonsArray.slice(startIndex, endIndex);
            return botonesNum
        }
    }
    
    const handlePage = (event) => {
        console.log(event.target.value);
        switch (event.target.name) {
            case 'button':
                return dispatch(setCurrentPage(Number(event.target.id)))
            case 'prev':
                let anterior = currentPage - 1
                if(currentPage > 1){
                    return dispatch(setCurrentPage(anterior))
                } else {
                    return dispatch(setCurrentPage(1))
                }
            case 'next':
                let siguiente = currentPage + 1
                if(currentPage < totalButtonsArray[totalButtonsArray.length - 1]){
                    return dispatch(setCurrentPage(siguiente))
                } else {
                    return dispatch(setCurrentPage(totalButtonsArray[totalButtonsArray.length - 1]))
                }
            case 'first':
                return dispatch(setCurrentPage(1))
            case 'last':
                return dispatch(setCurrentPage(totalButtonsArray[totalButtonsArray.length - 1]))
            default:
                break;
        }
    }

    return <div  className={style.paginationContainer}>
        <div className={style.arrow} >
            <div className={style.buttons} >
        {<Button  shape="circle" ><button className={style.arrowBtn} name="first" onClick={handlePage}> {"<<"} </button></Button>}
        {<Button  shape="circle" ><button className={style.arrowBtn} name="prev" onClick={handlePage}> {"<"} </button></Button>}
        </div>
        <div >
            {buttons(totalButtonsArray).map((number, i) => {
                return <Button
                    type={currentPage === number ? "primary" : "secondary"}
                    shape="circle"
                    key={number}
                    onClick={handlePage}
                    index={i}
                    name={`button`}
                    id={number}>
                    {number}
                </Button>
            })}
        </div>
        <div className={style.buttons}>
        {
        // <button name='next' onClick={handlePage} >Siguiente</button>}
      <Button  shape="circle" ><button className={style.arrowBtn} name="next" onClick={handlePage}> {">"} </button></Button>}
        {<Button  shape="circle" ><button className={style.arrowBtn} name="last" onClick={handlePage}> {">>"} </button></Button>}
        </div>
    </div>
        {<p className='texto'> Página {currentPage} de {totalButtons} </p>}
    </div>
}


export default Pagination