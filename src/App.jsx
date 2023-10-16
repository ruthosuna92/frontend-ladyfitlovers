//imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ConfigProvider, Button } from "antd";
//actions
import getAllProducts from "./redux/Actions/Product/getAllProducts";
// components
import ProductsView from "./views/ProductsView/ProductsView";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import Contac from "./views/Contac/Contac";
import Products from "./components/Products/Products";
import Dashboard from "./views/Dashboard/Dashboard";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import getAllCategories from "./redux/Actions/Category/getAllCategories";
import Profile from "./views/Profile/Profile";
import Footer from "./components/Footer/Footer";
import PaymentState from "./components/PaymentState/PaymentState";
import PreguntasFrecuentes from "./views/PreguntasFrecuentes/PreguntasFrecuentes";
import About from "./components/About/About";
import Checkout from "./components/ShoppingCart/Checkout/Checkout";

const App = () => {
  // dispatch to get all products globally
  const allProducts = useSelector((state) => state.allProducts);
  const filteredProducts = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  //condiction para que no se vuelva a cargar los productso si el estado
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
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
          colorSplit: "black",
          // colorBgBase: "#E0B3D3",
          // boxShadow: ,
          // boxShadowSecondary: ,
          // boxShadowTertiary: ,
        },
      }}
    >
     {location.pathname !== "/nosotros" && <NavBar />}
      {/* <h1>Hello World</h1>
      <Button type="primary">Hello World</Button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={user?.typeUser === "Admin" ?  <Dashboard /> : <Navigate to='/'/>} />
        <Route path="/admin/usuarios" element={user?.typeUser === "Admin" ?  <Dashboard />: <Navigate to='/'/>} />
        <Route path="/admin/productos" element={user?.typeUser === "Admin" ?  <Dashboard /> : <Navigate to='/'/>} />
        <Route path="/admin/ordenes" element={user?.typeUser === "Admin" ?  <Dashboard /> : <Navigate to='/'/>} />
        <Route path="/admin/crear-producto" element={user?.typeUser === "Admin" ?  <Dashboard /> : <Navigate to='/'/>} />
        <Route path="/login" />
        <Route path="/contacto" element={<Contac />} />
        <Route path="/register" />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:category" />
        <Route path="/products/:category/:id" />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/perfil/:key" element={user?.typeUser === "User" ? <Profile/> : <Navigate to='/'/> } />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/paymentState" element={<PaymentState />} />
        <Route path="/compra" element={<PaymentState />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>}/>
        <Route path="/nosotros" element={<About/>} />
      </Routes>
      <Footer />
    </ConfigProvider>
  );
};

export default App;
