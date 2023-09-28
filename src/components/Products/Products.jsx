import allProducts from "./pruebaProducts"
import Product from "../Product/Product"

const Products = () => {

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