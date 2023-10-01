//imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { ConfigProvider, Button } from "antd";
//actions
import getAllProducts from "./redux/Actions/getAllProducts";
// components
import ProductsView from "./views/ProductsView/ProductsView";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";


const App = () => {
  // dispatch to get all products globally
  const allProducts = useSelector((state) => state.allProducts);
  const filteredProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //condiction para que no se vuelva a cargar los productso si el estado
  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getAllProducts());
    }
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#C04C98",
          borderRadius: 10,
          colorBgContainer: "#F6F1F5",

          fontFamily: "'Poppins', sans-serif",
          colorLink: "#C04C98",
          colorInfo: "#C04C98",
          // colorBgBase: "#E0B3D3",
          // boxShadow: ,
          // boxShadowSecondary: ,
          // boxShadowTertiary: ,
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
        <Route path="/contacto" />
        <Route path="/register" />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:category" />
        <Route path="/products/:category/:id" />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
