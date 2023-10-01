import React from "react";
import Products from "../../components/Products/Products";
import Filters from "../../components/Filters/Filters";
import getAllProducts from "../../redux/Actions/getAllProducts";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";


const ProductsView = () => {
  const allProducts = useSelector((state) => state.allProducts)
  const dispatch = useDispatch();
   useEffect(() => {
     if(!allProducts){
       dispatch(getAllProducts());
     console.log(allProducts);
    }
  }, []);
  console.log(allProducts);
  return (
    <div>
      <Filters />
      <Products />
     
    </div>
  );
};

export default ProductsView;

