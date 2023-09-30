// Filters.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filtByCategory } from "../../redux/Actions/filtByCategory";

const Filters = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: ""
  });

  useEffect(() => {
    if (allProducts) {
      const uniqueCategoryNames = Array.from(
        new Set(
          allProducts
            .filter((product) => product.Category.name)
            .map((product) => product.Category.name)
        )
      );
      if (uniqueCategoryNames.length > uniqueCategories.length) {
        setUniqueCategories(uniqueCategoryNames);
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

  useEffect(() => {
    if (filters.category !== "") {
      dispatch(filtByCategory(filters.category));
    }
  }, [dispatch, filters.category]);

  return (
    <div>
      <select name="categoria" id="" onChange={handleChangeCategory}>
        <option value="T">Seleccione</option>
        {uniqueCategories.map((categoryName, index) => (
          <option key={index} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;

