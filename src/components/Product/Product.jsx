

const Product = ({id, name, image, price, sales}) => {

    return <div key={id}>
        <img alt={name} src={image} />
        <p >{name}</p>
        <h3 >{price}</h3>
    </div>
}

export default Product