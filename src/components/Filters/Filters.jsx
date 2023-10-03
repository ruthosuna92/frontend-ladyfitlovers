import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filtByCategory } from "../../redux/Actions/filtByCategory";
import { filtByColor } from "../../redux/Actions/filtByColor";
import { filtBySize } from "../../redux/Actions/filtBySize";
import { saveFilter } from "../../redux/Actions/saveFilter";
import setCurrentPage from "../../redux/Actions/setCurrentPage";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const filtersave = useSelector((state)=>state.saveFilters);
  console.log(filtersave)
  // Cambiar de dos estados locales a un solo estado local
  const [uniqueFilters, setUniqueFilters] = useState({
    category: [],
    color: [],
    selectCategory: "",
    selectColor: "",
    selectSize: ""
  });
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    size: "",
  });

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(saveFilter(uniqueFilters))
  }, [allProducts, uniqueFilters]);

  useEffect(() => {
    if (filters.category !== "") {
      dispatch(filtByCategory(filters.category));
    }
    if (filters.color !== "") {
      dispatch(filtByColor(filters.color));
    }
    if (filters.size !== "") {
      dispatch(filtBySize(filters.size));
    }
  }, [filters.category, filters.color, filters.size]);

  useEffect(() => {
    if (allProducts) {
      const uniqueCategoryNames = Array.from(
        new Set(
          allProducts.filter((product) => product.Category.name).map((product) => product.Category.name)
        )
      );
      const uniqueColorFil = Array.from(
        new Set(
          allProducts.flatMap((product) => product.stock.map((stockItem) => stockItem.color)).filter((color) => color)
        )
      );
      // Actualizar el estado local único con las categorías y colores únicos
      setUniqueFilters({
        ...uniqueFilters,
        category: uniqueCategoryNames,
        color: uniqueColorFil,
      });
    }
  }, [allProducts]);

  const handleChangeCategory = (event) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      category: value,
    });
    setUniqueFilters({
      ...uniqueFilters,
      selectCategory: value
    })
  };

  const handleChangeColor = (event) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      color: value,
    });
    setUniqueFilters({
      ...uniqueFilters,
      selectColor: value
    })
  };

  const handleSize = (event) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      size: value,
    });
    setUniqueFilters({
      ...uniqueFilters,
      selectSize: value
    })
  };

  const optionSize = () => {
    const size = ["xs", "s", "m", "l", "xl", "xxl"];
    return size.map((size, index) => (
      <option key={index} value={size}>
        {size}
      </option>
    ));
  };

  const handleClick = () => {
    setFilters({
      category: "T",
      color: "",
      size: "",
    });
    setUniqueFilters({
      ...uniqueFilters,
      selectCategory: "T",
      selectColor: "",
      selectSize: "TA"
    })
  };

  return (
    <div className={style.containerFilter}>
      <div className={style.subcontainer}>
        <button className={style.btnres} onClick={() => handleClick()}>
          Reset
        </button>
        <div className={style.contenselect}>
          <select name="categoria" id="" value={filtersave.selectCategory} onChange={handleChangeCategory}>
            <option value="T">Categoria</option>
            {filtersave.category.map((categoryName, index) => (
              <option key={index} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </select>
          <i></i>
        </div>
        <div className={style.contenselect}>
          <select name="color" id="" value={filtersave.selectColor} onChange={handleChangeColor}>
            <option value="">Color</option>
            {filtersave.color.map((colorArticle, index) => (
              <option key={index} value={colorArticle}>
                {colorArticle}
              </option>
            ))}
          </select>
          <i></i>
        </div>
        <div className={style.contenselect}>
          <select name="" id="" value={filtersave.selectSize} onChange={handleSize}>
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


