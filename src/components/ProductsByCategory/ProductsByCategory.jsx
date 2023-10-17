import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import NoFoundScreen from "../NoFoundScreen/NoFoundScreen";
import "./productsByCategory.css";

const ProductsByCategory = () => {
  const { category } = useParams();
  const allProducts = useSelector((state) => state.saveProducts);
  const [productsToShow, setProductsToShow] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductsToShow(
      allProducts.filter((product) => product.Category.name === category)
    );
    setLoading(false);    
  }, [allProducts, category]);


  return (
    <div className="productsByCategoryContainer">
      <h3>Categoría: {category}</h3>
      <div className="productsCardsCategoryContainer" >           
        {
         productsToShow?.length ?  productsToShow?.map(
            (product) => {
                return (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                unitsSold={product.unitsSold}
                stock={product.stock}
                priceOnSale={product.priceOnSale}
              
              />
              )
            }
          ) : (
            <NoFoundScreen/>
          )
        }
      </div>
    </div>
  );
};

export default ProductsByCategory;
