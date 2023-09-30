import React from "react";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect }from "react"
import getAllProducts from "../../redux/Actions/getAllProducts";

const ProductsView = () => {
  const allProducts = useSelector((state) => state.allProducts)
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if(!allProducts.length){
  //     dispatch(getAllProducts());
  //     console.log(allProducts);
  //   }
  // }, []);
  console.log(allProducts);
  return (
    <div>
      {/* importar filtros, paginado y side bar etc */}
      <Products />
      <Pagination/>
    </div>
  );
};

export default ProductsView;
