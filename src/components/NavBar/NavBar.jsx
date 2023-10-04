import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// actions
import loginUser from "../../redux/Actions/User/loginUser";
import logoutUser from "../../redux/Actions/User/logoutUser";

import "./navBar.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import logo from "/svg/LADYFIT1.svg";
import SearchBar from "../SearchBar/SearchBar";
import LoginModal from "../LoginModal/LoginModal";


import { Space, Button, Menu, Dropdown, Tooltip } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  FundViewOutlined,
  SearchOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import CreateAcountModal from "../CreateAcountModal/CreateAcountModal";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // logout
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  // modal
  const [visible, setVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [createAcountModalVisible, setCreateAcountModalVisible] = useState(false);

  const user = useSelector((state) => state.user);
  const state = useSelector((state) => state);

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
    }
    setVisible(false);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {state.user.typeUser == "Admin" && (
        <Menu.Item key="dashboard">
          <Link to="/admin">
            <FundViewOutlined />
            Panel Administrador
          </Link>
        </Menu.Item>
      )}
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined />
        Cerrar Sesión
      </Menu.Item>
      <Menu.Item key="perfil" >
        <Link to="/profile">
          <ProfileOutlined />
          Perfil
        </Link>
      </Menu.Item>
    </Menu>
  );

  const userDropdown = (
    <Dropdown
      overlay={menu}
      visible={visible}
      onVisibleChange={(v) => setVisible(v)}
    >
      <Button shape="circle" size="large">
        <UserOutlined />
      </Button>
    </Dropdown>
  );

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  return (
    <>
      <div className="navBarContainer">
        <div className="navBarLinksContainer">
          <Link to="/">
            <img src={logo} />
          </Link>

          <Link to="/">
            <button
              className={
                location.pathname === "/" ? "buttonLinkActive" : "navBarButton"
              }
              title="Inicio"
            >
              Inicio
            </button>
          </Link>
          <Link to="/products">
            <button
              className={
                location.pathname === "/products"
                  ? "buttonLinkActive"
                  : "navBarButton"
              }
              title="Products"
            >
              Productos
            </button>
          </Link>
          <Link to="/contacto">
            <button
              className={
                location.pathname === "/contacto"
                  ? "buttonLinkActive"
                  : "navBarButton"
              }
              title="Contact"
            >
              Contacto
            </button>
          </Link>
          <Link to="/crear-producto">
            <button
              className={
                location.pathname === "/crear-producto"
                  ? "buttonLinkActive"
                  : "navBarButton"
              }
              title="Contact"
            >
              Crear
            </button>
          </Link>
        </div>
        <div className="searchBarDiv">
          <SearchBar />
        </div>

        {/* informacion del usuario */}
        {user.email && (
          <div className="userInfo">
            Hola, {user.name} {user.surname}
            <Button shape="circle" size="large">
              <ShoppingCartOutlined />
            </Button>
            {userDropdown}
          </div>
        )}
        {!user.email && (
          <div>
            <ButtonPrimary title="Iniciar Sesión" onClick={openLoginModal} />
          </div>
        )}
      </div>

      <LoginModal
        visible={loginModalVisible}
        onClose={() => setLoginModalVisible(false)}
        setCreateAcountModalVisible={setCreateAcountModalVisible}
      />
      {createAcountModalVisible && (
        <CreateAcountModal
          visible={createAcountModalVisible}
          onClose={() => setCreateAcountModalVisible(false)}
        />

      )}
    </>
  );
};

export default NavBar;
