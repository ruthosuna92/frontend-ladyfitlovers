import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
} from "@ant-design/icons";

const NavBar = () => {
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
    }
    setVisible(false);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="dashboard">
        <Link to="/admin">
          <FundViewOutlined />
          Panel
        </Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        Salir
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

        <div className="userInfo">
          Hola, Anacleta Johnson
          <Button shape="circle" size="large">
            <ShoppingCartOutlined />
          </Button>
          {userDropdown}
        </div>

        <div>
          <ButtonPrimary title="Iniciar Sesión" onClick={openLoginModal} />
        </div>
      </div>

      <LoginModal
        visible={loginModalVisible}
        onClose={() => setLoginModalVisible(false)}
      />
    </>
  );
};

export default NavBar;
