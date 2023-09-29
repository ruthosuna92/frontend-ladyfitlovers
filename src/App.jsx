import React from "react";
//importamos ant design
import Home from "./views/Home/Home";
import { ConfigProvider, Button } from "antd";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#DF3079",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <NavBar />
      {/* <h1>Hello World</h1>
      <Button type="primary">Hello World</Button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/products" />
        <Route path="/products/:category" />
        <Route path="/products/:category/:id" />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
