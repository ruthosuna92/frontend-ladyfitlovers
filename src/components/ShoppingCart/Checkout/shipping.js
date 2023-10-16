const amount = (type) => {
    let amount = 0
    if(type === "Retiro en punto de entrega"){
        amount = 1
        return amount
    } else {
        amount = 2
        return amount
    }
}

export default amount