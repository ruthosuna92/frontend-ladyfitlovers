import React, { useState } from "react";
import {
  ShoppingOutlined,
  UserOutlined,
  EditOutlined,
  StarOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import DataProfile from "../DataProfile/DataProfile";
import CreateAcountForm from "../CreateAcountModal/CreateAcountForm";
import style from "./ProfileLayout.module.css";
import { Formik, Form } from "formik";
import {CreateAcountSchema} from "../CreateAcountModal/createAcountSchema";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";


const { Header, Sider, Content } = Layout;
const ProfileLayout = ({ profileKey }) => {
  const navigate = useNavigate();
  const infouser = useSelector((state) => state.user);
  const [dataUser, setFormData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    provincia: "",
    address: "",
    pivotuser: false,
  });

  useEffect(() => {
    console.log(infouser);
    if (infouser) {
      setFormData({
        id: infouser.id,
        name: infouser.name || "",
        surname: infouser.surname || "",
        email: infouser.email || "",
        phone: infouser.phone || "",
        provincia: infouser.provincia || "",
        address: infouser.address || "",
        pivotuser: true,
      });
    }else if (!infouser.id){
      return navigate("/")
    }
  }, [infouser]);
  const [selectedKey, setSelectKey] = useState(profileKey);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const keySelect = ({ key }) => {
    setSelectKey(key);
  };
  return (
    <Layout>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          style={{ height: "80vh" }}
          defaultSelectedKeys={profileKey}
          onSelect={keySelect}
          items={[
            {
              key: "perfil",
              icon: <UserOutlined />,
              label: "Perfil",
            },
            {
              key: "editar",
              icon: <EditOutlined />,
              label: "Editar Perfil",
            },
            {
              key: "compras",
              icon: <ShoppingOutlined />,
              label: "Mis Compras",
            },
            {
              key: "opiniones",
              icon: <StarOutlined />,
              label: "Opiniones",
            },
            {
              key: "favoritos",
              icon: <HeartOutlined />,
              label: "Favoritos",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content className={style.layaout1}>
          {selectedKey === "perfil" && <DataProfile />}
          {selectedKey === "editar" && (
            <Formik
              initialValues={{
                name: dataUser.name,
                surname: dataUser.surname,
                calle: "",
                numero: "",
                dpto: "",
                entreCalles: "",
                localidad: "",
                codigoPostal: "",
                provincia: "",
                phone: dataUser.phone,
                email: dataUser.email,
                password: "",
                confirmPassword: "",
              }}
              validationSchema={CreateAcountSchema}
            >
              <div className={style.formSetting}>
                <CreateAcountForm
                  pivotuser={dataUser.pivotuser}
                  dataAddress={dataUser.address}
                  idUser={dataUser.id}
                />
              </div>
            </Formik>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};
export default ProfileLayout;
