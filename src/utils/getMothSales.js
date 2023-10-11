export const getMonthSales = (sales, month) => {
    const monthSales = sales.filter(sale => {
        const newFormat = sale.orderDate.split('/');
        const saleMonth = `${newFormat[1]}/${newFormat[0]}/${newFormat[2]}`
        
        const saleDate = new Date(saleMonth);
        return saleDate.getMonth() === month;
    });
    return monthSales;
    }
