import setCurrentPage from "../../redux/Actions/setCurrentPage"
import { useDispatch, useSelector } from "react-redux"

const Pagination = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.currentPage)
    const allProducts = useSelector((state) => state.allProducts)
    const totalButtons = useSelector((state) => state.totalButtons)

    const range = (start, stop, step) => //función para crear un arreglo de números que vayan incrementando hasta totalButtons
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
    const totalButtonsArray = range(1, totalButtons, 1) //ejecuto la función para que se cree el arreglo con los parámetros que le pase
    let buttonsPerRender = 3
    let startIndex = currentPage - 1
    let endIndex = startIndex + buttonsPerRender

    const buttons = (totalButtonsArray) => {

        let botonesNum = null

        if (currentPage >= totalButtonsArray.length - 2) {
            botonesNum = totalButtonsArray.slice(totalButtonsArray.length - 3)
            return botonesNum
        } else {
            botonesNum = totalButtonsArray.slice(startIndex, endIndex);
            return botonesNum
        }
    }
    const handlePage = (event) => {
        switch (event.target.name) {
            case 'button':
                return dispatch(setCurrentPage(Number(event.target.id)))
            case 'prev':
                let anterior = currentPage - 1
                return dispatch(setCurrentPage(anterior))
            case 'next':
                let siguiente = currentPage + 1
                return dispatch(setCurrentPage(siguiente))
            case 'first':
                return dispatch(setCurrentPage(1))
            case 'last':
                return dispatch(setCurrentPage(totalButtonsArray[totalButtonsArray.length - 1]))
            default:

                break;
        }
    }

    return <div>
        {currentPage > 3 && <button name='first' onClick={handlePage} >Primera</button>}
        {currentPage > 1 && <button name='prev' onClick={handlePage} >Anterior</button>}
        <div>
            {buttons(totalButtonsArray).map((number, i) => {
                return <button
                    key={number}
                    onClick={handlePage}
                    index={i}
                    name={`button`}
                    id={number}
                >
                    {number}
                </button>
            })}
        </div>
        {currentPage < totalButtonsArray.length - 2 && <button name='next' onClick={handlePage} >Siguiente</button>}
        {currentPage < totalButtonsArray.length - 2 && <button name='last' onClick={handlePage} >Última</button>}
        {totalButtonsArray.length > 1 && <p className='texto'> Página {currentPage} de {totalButtons} </p>}
    </div>
}


export default Pagination