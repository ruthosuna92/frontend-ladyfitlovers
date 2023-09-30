import setCurrentPage from "../../redux/Actions/setCurrentPage"
import { useDispatch, useSelector } from "react-redux"

const Pagination = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.currentPage)
    const allProducts = useSelector((state) => state.allProducts)
    const buttons = [1, 2, 3, 4, 5, 6]
    // const quantity = 4

    // const startIndex = (currentPage - 1) * quantity
    // const endIndex = startIndex + quantity
    
    const handlePage = (event) => {
        dispatch(setCurrentPage(event.target.id))
    }

    return <div>
        {buttons.map((button) => {
            return <button id={button} onClick={handlePage}>{button}</button>
        })}
    </div>
}

export default Pagination