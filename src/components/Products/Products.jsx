import Product from "../Product/Product"
import { useSelector, useDispatch } from "react-redux"
import {useEffect} from 'react'
import getAllProducts from "../redux/Actions/"



const Products = () => {
    
    const allProducts = useSelector((state) => state.allProducts)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    return <div>
        {
            allProducts && allProducts?.map(({id, name, image, price, sales}) => {
                return <Product
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                    sales={sales}
                />
            })
        }
    </div>
}

export default Products