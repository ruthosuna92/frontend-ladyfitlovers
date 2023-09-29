import { Link } from "react-router-dom";

const Product = ({id, name, image, price, sales}) => {

    return <div key={id}>
            <img alt={name} src={image} />
        <Link to={`/detail/${id}`}>
            <p >{name}</p>
        </Link>
        <h3 >{price}</h3>
    </div>
}

export default Product