import React from "react";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getAllProducts from "../../redux/Actions/Product/getAllProducts";
import Filters from "../../components/Filters/Filters";
import style from "./ProductsView.module.css"

const ProductsView = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if(!allProducts.length){
  //     dispatch(getAllProducts());
  //     console.log(allProducts);
  //   }
  // }, []);

  return (
    <div className={style.containerAll}>
      <Filters />
      <div className={style.containeProduct}>
        <Products />
      </div>
      <Pagination />
    </div>
  );
};

export default ProductsView;
