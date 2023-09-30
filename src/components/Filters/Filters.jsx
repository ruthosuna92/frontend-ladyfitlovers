// Filters.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filtByCategory } from "../../redux/Actions/filtByCategory";
import { filtByColor } from "../../redux/Actions/filtByColor";
import { filtBySize } from "../../redux/Actions/filtBySize";

const Filters = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueColor, setUniqueColor] = useState([])
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    size:""
  });
  useEffect(() => {
    if (allProducts) {
      const uniqueCategoryNames = Array.from(
        new Set(
          allProducts.filter((product) => product.Category.name).map((product) => product.Category.name)
        ),
      );
      const uniqueColorFil = Array.from(
        new Set(
          allProducts.flatMap((product) => product.stock.map((stockItem) => stockItem.color)).filter((color) => color)
        )
      );
      if (uniqueCategoryNames.length > uniqueCategories.length) {
        setUniqueCategories(uniqueCategoryNames);
      }
      if (uniqueColorFil.length > uniqueColor.length) {
        setUniqueColor(uniqueColorFil);
      }
    }
  }, [allProducts]);
  useEffect(() => {
    if (filters.category !== "") {
      dispatch(filtByCategory(filters.category));
      setFilters({...filters, category: "" })
    }
    if (filters.color !== "") {
      dispatch(filtByColor(filters.color))
      setFilters({...filters, color: "" })
    }
    if(filters.size !== ""){
      console.log(filters.size)
      dispatch(filtBySize(filters.size))
      setFilters({...filters, size: "" })
    }
  }, [filters.category, filters.color, filters.size]);

  const handleChangeCategory = (event) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      category: value
    });
  };
  const handleChangeColor = (event) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      color: value
    });
  };
  const handleSize=(event)=>{
    const value = event.target.value;
    setFilters({
      ...filters,
      size: value
    });
  }
  const optionSize =()=>{
    const size = ["xs","s", "m", "l", "xl", "xxl"]
    return size.map((size, index)=>(
      <option key={index} value={size}>{size}</option>
    ))
  }


  return (
    <div>
      <button>Reset</button>
      <select name="categoria" id="" onChange={handleChangeCategory}>
        <option value="T">Seleccione</option>
        {uniqueCategories.map((categoryName, index) => (
          <option key={index} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </select>
      <select name="color" id="" onChange={handleChangeColor}>
        <option value="C">Seleccione</option>
        {uniqueColor.map((colorArticle, index) => (
          <option key={index} value={colorArticle}>
            {colorArticle}
          </option>
        ))}
      </select>
      <select name="talla" id="" onChange={handleSize}>
        <option value="TA">Seleccione</option>
        {optionSize()}
      </select>
    </div>
  );
};

export default Filters;

