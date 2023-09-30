import React, { useState } from "react";
import { useDispatch } from "react-redux";
import  getProductByName from "../../redux/Actions/getProductByName";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(getProductByName(searchQuery));
    navigate("/products");
  };

  return (
    <div>
      <br />
      <Space direction="vertical">
        <Search
          placeholder="Buscar..."
          allowClear
          onSearch={handleSearch}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: 200,
          }}
        />
      </Space>
    </div>
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
