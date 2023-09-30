import React from "react";
import Products from "../../components/Products/Products";
import Filters from "../../components/Filters/Filters";

const ProductsView = () => {
  return (
    <div>
      <Filters />
      <Products />
    </div>
  );
};

export default ProductsView;

