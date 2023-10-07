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

import { Space, Button, Menu, Dropdown, Tooltip, Badge } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  FundViewOutlined,
  SearchOutlined,
  ProfileOutlined,
  ShoppingOutlined,
  StarOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import CreateAcountModal from "../CreateAcountModal/CreateAcountModal";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // logout
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  //menus
  const [visible, setVisible] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  // modal
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [createAcountModalVisible, setCreateAcountModalVisible] =
    useState(false);

  const user = useSelector((state) => state.user);

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
    }
    setVisible(false);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {user.typeUser == "Admin" && (
        <Menu.Item key="dashboard">
          <Link to="/admin">
            <FundViewOutlined className="menuIcon" />
            Panel Administrador
          </Link>
        </Menu.Item>
      )}
      <Menu.Item key="perfil">
        <Link to="/perfil/perfil">
          <ProfileOutlined className="menuIcon" />
          Perfil
        </Link>
      </Menu.Item>
      <Menu.Item key="compras">
        <Link to="/perfil/compras">
          <ShoppingOutlined className="menuIcon" />
          Mis compras
        </Link>
      </Menu.Item>
      <Menu.Item key="opiniones">
        <Link to="/perfil/opiniones">
          <StarOutlined className="menuIcon" />
          Opiniones
        </Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined className="menuIcon" />
        Cerrar Sesión
      </Menu.Item>
    </Menu>
  );

  const categories = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="perfil">
        <Link to="/perfil/perfil">
          <ProfileOutlined className="menuIcon" />
          Perfil
        </Link>
      </Menu.Item>
      <Menu.Item key="compras">
        <Link to="/perfil/compras">
          <ShoppingOutlined className="menuIcon" />
          Mis compras
        </Link>
      </Menu.Item>
      <Menu.Item key="opiniones">
        <Link to="/perfil/opiniones">
          <StarOutlined className="menuIcon" />
          Opiniones
        </Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined className="menuIcon" />
        Cerrar Sesión
      </Menu.Item>
    </Menu>
  );

  const userDropdown = (
    <Dropdown
      overlay={menu}
      visible={visible}
      onVisibleChange={(v) => setVisible(v)}
    >
      <Button
        shape="circle"
        size="large"
        className="buttonNavAccess"
        // style={{
        //   border: "none",
        // }}
      >
        <UserOutlined />
      </Button>
    </Dropdown>
  );

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  const productsDropdown = (
    <Dropdown
      overlay={menu}
      visible={visible}
      onVisibleChange={(v) => setVisible(v)}
    >
      <Button
        shape="circle"
        size="large"
        className="buttonNavAccess"
        // style={{
        //   border: "none",
        // }}
      >
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
        <UserOutlined />
      </Button>
    </Dropdown>
  );

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
          {/* <Link to="/crear-producto">
            <button
              className={
                location.pathname === "/crear-producto"
                  ? "buttonLinkActive"
                  : "navBarButton"
              }
              title="Crear producto"
            >
              Crear
            </button>
          </Link> */}
        </div>
        <div className="searchBarDiv">
          <SearchBar />
        </div>

        {/* informacion del usuario */}
        {user.email && (
          <div className="userInfo">
            <p>Hola, {user.name} </p>
            {/* {user.surname} */}
            {userDropdown}
          </div>
        )}
        <Link to="/perfil/favoritos">
          <Button
            shape="circle"
            size="large"
            className="buttonNavAccess"
            // style={{
            //   border: "none",
            // }}
          >
            <HeartOutlined />
          </Button>
        </Link>

        <Button
          shape="circle"
          size="large"
          className="buttonNavAccess"
          // style={{
          //   // backgroundColor: "transparent",
          //   border: "none",
          //   // padding: 0,
          // }}
        >
          <ShoppingCartOutlined />
          <sup
            data-show="true"
            className="ant-scroll-number ant-badge-count"
            title="1"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              transform: "translate(50%, -50%)",
              backgroundColor: "#ba338a",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1
          </sup>
        </Button>

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
