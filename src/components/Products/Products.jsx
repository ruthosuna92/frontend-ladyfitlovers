import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getAllProducts from "../../redux/Actions/getAllProducts";
import style from "./Products.module.css";

const Products = () => {
  const productsPerPage = useSelector((state) => state.productsPerPage);
  const allProducts = useSelector((state) => state.allProducts);
  const filteredProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className={style.cardsContainer}>
      {productsPerPage.map(({ id, name, image, price, unitsSold, stock }) => {
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
          />
        );
      })}
    </div>
  );
};

export default Products;

