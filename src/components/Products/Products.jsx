import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Drawer } from "antd";
import getAllProducts from "../../redux/Actions/Product/getAllProducts";
import style from "./Products.module.css";
import NoFoundScreen from "../NoFoundScreen/NoFoundScreen";

const Products = () => {
  const productsPerPage = useSelector((state) => state.productsPerPage);
  const allProducts = useSelector((state) => state.allProducts);
  const filteredProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // console.log(productsPerPage)

  return (
            <div className={style.cardsContainer}>
      {
        !productsPerPage.length  ? <NoFoundScreen text={"No se encontraron productos"}/> :
        productsPerPage.map(({ id, name, image, price, unitsSold, stock, priceOnSale }) => {
          // const color = stock.map((stockItem) => stockItem.color);
  
          return (
            <>
              <Product
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                unitsSold={unitsSold}
                stock={stock}
                priceOnSale={priceOnSale}

              ></Product>
              <Drawer></Drawer>
            </>
          );
        })
      }
    </div>
  );
};

export default Products;
