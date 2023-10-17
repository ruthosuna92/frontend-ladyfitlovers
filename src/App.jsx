//imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
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
import Favs from "./views/Favs/Favs";
import getFavoritesByIdUser from "./redux/Actions/Favs/getFavoritesByIdUser";
import QandA from "./views/QandA/QandA";
import About from "./components/About/About";
import RecoveryPassword from "./views/RecoveryPassword/RecoveryPassword";
import CodeRequirer from "./views/CodeRequierer/CodeRequirer";

import UserBanError from "./components/UserBanError/UserBanError";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";
import Checkout from "./components/ShoppingCart/Checkout/Checkout";

const App = () => {
  // dispatch to get all products globally
  const allProducts = useSelector((state) => state.allProducts);
  const filteredProducts = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  //condiction para que no se vuelva a cargar los productso si el estado
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());

  }, []);
  const { pathname } = useLocation()

  useEffect(() => {
    if (user.userBan) {
      navigate("/sin-acceso")
    }
  }, [user, pathname])

  useEffect(()=> {
    if(user) {

      dispatch(getFavoritesByIdUser(user.id))
    }

  },[user])

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


      {(pathname !== "/nosotros" || pathname !== "/sin-acceso") && !pathname.startsWith("/recuperar-contrasena") && <NavBar />}
      {/* <h1>Hello World</h1>
      <Button type="primary">Hello World</Button> */}
      <Routes>
        {user.userBan ? (
          <Route path="/sin-acceso" element={<UserBanError />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={(!user.userBan && user?.typeUser === "Admin") ? <Dashboard /> : <Navigate to='/' />} />
            <Route path="/admin/usuarios" element={(!user.userBan && user?.typeUser === "Admin") ? <Dashboard /> : <Navigate to='/' />} />
            <Route path="/admin/productos" element={(!user.userBan && user?.typeUser === "Admin") ? <Dashboard /> : <Navigate to='/' />} />
            <Route path="/admin/ordenes" element={(!user.userBan && user?.typeUser === "Admin") ? <Dashboard /> : <Navigate to='/' />} />
            <Route path="/admin/crear-producto" element={(!user.userBan && user?.typeUser === "Admin") ? <Dashboard /> : <Navigate to='/' />} />
            <Route path="/login" />
            <Route path="/contacto" element={<Contac />} />
            <Route path="/register" />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/products/:category" element={<ProductsByCategory />} />
            <Route path="/products/:category/:id" />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/perfil/:key" element={(!user.userBan || user?.typeUser === "Admin") && user?.typeUser === "User"  ? <Profile /> : <Navigate to='/' />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentState" element={<PaymentState />} />
            <Route path="/compra" element={<PaymentState />} />
            <Route path="/preguntas-frecuentes" element={<QandA />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/recuperar-contrasena/" element={<RecoveryPassword />}>
              <Route path="codigo-requerido" element={<CodeRequirer />} />
            </Route>
          </>
        )}
      </Routes>
      <Footer />
    </ConfigProvider>
  );
};

export default App;
