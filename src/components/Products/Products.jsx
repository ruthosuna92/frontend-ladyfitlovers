import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getAllProducts from "../../redux/Actions/getAllProducts";

import style from "./Products.module.css";

const Products = () => {
  const productsPerPage = useSelector((state) => state.productsPerPage);
  const allProducts = useSelector((state) => state.allProducts)
  const filteredProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(!allProducts.length){
  //     dispatch(getAllProducts());
  //     console.log(allProducts);
  //   }
  // }, []);
  console.log(allProducts);
  console.log(productsPerPage);
  return (
    <div className={style.cardsContainer}>
      {productsPerPage.map(({ id, name, image, price, sales, size, colour }) => {
          return (
            <Product
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
