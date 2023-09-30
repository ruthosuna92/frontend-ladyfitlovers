import React from "react";

import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  // Function to handle input change when searching by name
  const handleInputChange = (e) => {
    setSearchedCountry({ value: e.target.value });
  };

  // Function to handle form submission when searching by name

  const handleOnSubmit = (e) => {
    e.preventDefault();
    clearFilters();
    // Update the 'name' filter based on user input
    setActualFilters((state) => {
      return { ...state, name: searchedCountry.value.trim() };
    });
  };

  return (
    <div>
      <br />
      <Space direction="vertical">
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
          allowClear
          onSearch={onSearch}
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
      </Space>

      {/* <div className={style.searchContainer}>
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
      </div> */}
    </div>
  );
};

export default SearchBar;
