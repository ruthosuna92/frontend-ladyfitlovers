import React from "react";
//importamos ant design
import Home from "./views/Home";
import Detail from "./components/Detail/Detail";
import { ConfigProvider, Button } from "antd";
import { Routes, Route, useLocation } from "react-router-dom";

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
      {/* <h1>Hello World</h1>
      <Button type="primary">Hello World</Button> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin"/>
        <Route path="/login"/>
        <Route path="/register"/>
        <Route path="/products"/>
        <Route path="/products/:category"/>
        <Route path="/products/:category/:id"/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </ConfigProvider>
  );
};

export default App;
