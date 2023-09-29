import Product from "../Product/Product"
import { useSelector } from "react-redux"



const Products = () => {
    
    const allProducts = useSelector((state) => state.allProducts)


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