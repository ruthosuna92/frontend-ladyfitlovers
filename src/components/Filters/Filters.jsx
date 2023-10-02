// Filters.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filtByCategory } from "../../redux/Actions/filtByCategory";
import { filtByColor } from "../../redux/Actions/filtByColor";
import { filtBySize } from "../../redux/Actions/filtBySize";
import setCurrentPage from "../../redux/Actions/setCurrentPage"
import getAllProducts from "../../redux/Actions/getAllProducts";
import style from "./Filters.module.css"
const Filters = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const name = useSelector((state) => state.name)
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueColor, setUniqueColor] = useState([])
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    size: ""
  });
  useEffect(() => {
    dispatch(setCurrentPage(1))
  }, [allProducts])
  console.log(allProducts);
  useEffect(() => {
    if (filters.category !== "") {
      dispatch(filtByCategory(filters.category));
    }
    if (filters.color !== "") {
      dispatch(filtByColor(filters.color))
    }
    if (filters.size !== "") {
      dispatch(filtBySize(filters.size))
    }
  }, [filters.category, filters.color, filters.size]);

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
      if (uniqueCategoryNames.length > uniqueCategories.length && !name) {
        dispatch(getAllProducts())
        setUniqueCategories(uniqueCategoryNames);
      }
      if (uniqueColorFil.length > uniqueColor.length) {
        setUniqueColor(uniqueColorFil);
      }
    }
  }, [allProducts]);


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
  const handleSize = (event) => {

    const value = event.target.value;
    setFilters({
      ...filters,
      size: value
    });
  }
  const optionSize = () => {
    const size = ["xs", "s", "m", "l", "xl", "xxl"]
    return size.map((size, index) => (
      <option key={index} value={size}>{size}</option>
    ))
  }
  const handleClick = () => {
    setFilters({
      category: "T",
      color: "",
      size: ""
    });
  }

  return (
    <div className={style.containerFilter}>
      <div className={style.subcontainer}>
        <button className={style.btnres} onClick={() => handleClick()}>Reset</button>
        <div className={style.contenselect}>
          <select name="categoria" id="" value={filters.category} onChange={handleChangeCategory}>
            <option value="T">Categoria</option>
            {uniqueCategories.map((categoryName, index) => (
              <option key={index} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </select>
          <i></i>
        </div>
        <div className={style.contenselect}>
          <select name="color" id="" value={filters.color} onChange={handleChangeColor}>
            <option value="">Color</option>
            {uniqueColor.map((colorArticle, index) => (
              <option key={index} value={colorArticle}>
                {colorArticle}
              </option>
            ))}
          </select>
          <i></i>
        </div>
        <div className={style.contenselect}>
          <select name="" id="" value={filters.size} onChange={handleSize}>
            <option value="TA">Talla</option>
            {optionSize()}
          </select>
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default Filters;

