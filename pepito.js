const ropa = [{
    CategoryId:1,
    id:1,
    image:"https://d22fxaf9t8d39k.cloudfront.net/e7932f7f83718e372db5316f598c872d4daacfd08d1e496e80a70112c821518a205310.jpg",
    name:"se va",
    price:1,
    priceOnSale:null,
},
{ CategoryId:1,
    id:2,
    image:"https://d22fxaf9t8d39k.cloudfront.net/e7932f7f83718e372db5316f598c872d4daacfd08d1e496e80a70112c821518a205310.jpg",
    name:"se quedan",
    price:1,
    priceOnSale:null},

    { CategoryId:1,
        id:3,
        image:"https://d22fxaf9t8d39k.cloudfront.net/e7932f7f83718e372db5316f598c872d4daacfd08d1e496e80a70112c821518a205310.jpg",
        name:"se quedan",
        price:1,
        priceOnSale:null},
        { CategoryId:1,
            id:4,
            image:"https://d22fxaf9t8d39k.cloudfront.net/e7932f7f83718e372db5316f598c872d4daacfd08d1e496e80a70112c821518a205310.jpg",
            name:"se quedan",
            price:1,
            priceOnSale:null}
]

const filter = ropa.filter((e)=> e.id !==1)

console.log(filter);