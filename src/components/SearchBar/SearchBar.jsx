import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProductByName from "../../redux/Actions/Product/getProductByName";
import getAllProducts from "../../redux/Actions/Product/getAllProducts";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import setName from "../../redux/Actions/Filter/setName";
import { useEffect } from "react";

const { Search } = Input;

const SearchBar = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name);
  const navigate = useNavigate();
  useEffect(()=>{
    if(name!==""){
      dispatch(getProductByName(name))
    }
  },[name])


  const handleInputChange = async(event) => {
    dispatch(setName(event.target.value));
    navigate("/products");
  };

  return (
    <>
      <br />
      <Space direction="vertical" name="espacio">
      <Input placeholder="Buscar..."
          allowClear={false}
          onChange={handleInputChange}
          value={name} // Asigna el valor del campo de búsqueda a 'name'
          style={{
            width: 200,
          }} 
        />
        
      </Space>
    </>
  );
};

export default SearchBar;

{
  /* <div className={style.searchContainer}>
        <div className={style.labelSearch}>
          <label htmlFor="filter">By Name</label>
        </div>
        <div className={style.inputSearchContainer}>
          <form onSubmit={handleOnSubmit}>
            <input
              onChange={handleInputChange}
              value={searchedCountry.value}
              type="text"
              placeholder="Country name"
              id="filter"
            />
            <button
              onClick={handleOnSubmit}
              href="#"
              className={style.btnSearch}
            >
              🔎
            </button>
          </form>
        </div>
      </div> 
      
      
      
      
      
      <Search
          onChange={handleSearch}
          placeholder="Buscar..."
          bordered={false}
          onSearch={handleSearch}
          style={{
            width: 200,
          }}
        />
        <Search
          onChange={handleSearch}
          placeholder="Buscar..."
          onSearch={onSearch}
          enterButton
        />
        <Search
          onChange={handleSearch}
          placeholder="Buscar..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      
      */
}
