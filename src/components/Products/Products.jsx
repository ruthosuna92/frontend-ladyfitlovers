import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getAllProducts from "../../redux/Actions/getAllProducts";

import style from "./Products.module.css";

const Products = () => {
  const allProducts = useSelector((state) => state.allProducts);
  // const filteredProducts = useSelector((state) => state.products);

  return (
    <div className={style.cardsContainer}>
      {allProducts &&
        allProducts?.map(({ id, name, image, price, sales, size, colour }) => {
          return (
            <Product
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              sales={sales}
              colour={colour}
              size={size}
            />
          );
        })}
    </div>
  );
};

export default Products;
