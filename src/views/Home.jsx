import Products from "../components/Products/Products"
import {useEffect} from 'react'
import { useDispatch } from "react-redux"
import getAllProducts from "../redux/Actions/getAllProducts"


const Home = () => {

    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    
    return (
        <div>
            <p>Hola soy el home!!!</p>
            <Products />
        </div>
    )
}

export default Home