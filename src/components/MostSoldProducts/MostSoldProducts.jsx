import React from "react";
import { useSelector } from "react-redux";
import "./mostSoldProducts.css";
import Product from "../Product/Product";

const MostSoldProducts = () => {
  const allProducts = useSelector((state) => state.saveProducts);
  const mostSoldProduct = allProducts
    .sort((a, b) => b.unitsSold - a.unitsSold)
    .slice(0, 4);

    console.log(mostSoldProduct)

  return (
    <div className="mostSoldProductsContainer">
      <h1 className="titleMostSold">¡Productos destacados!</h1>
      <div className="cardsContainer">
        {mostSoldProduct?.map(
          ({ id, name, image, price, unitsSold, stock, priceOnSale }) => {
            // const color = stock.map((stockItem) => stockItem.color);

            return (
              <Product
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                unitsSold={unitsSold}
                stock={stock}
                priceOnSale={priceOnSale}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default MostSoldProducts;
