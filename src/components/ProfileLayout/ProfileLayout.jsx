import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
  UserOutlined,
  UnorderedListOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import DataProfile from "../DataProfile/DataProfile";
import CreateAcountForm from "../CreateAcountModal/CreateAcountForm";
import style from "./ProfileLayout.module.css";
import { Formik, Form } from "formik";
import CreateAcountSchema from "../CreateAcountModal/createAcountSchema";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const { Header, Sider, Content } = Layout;
const ProfileLayout = () => {
  const infouser = useSelector((state) => state.user);
  const [dataUser, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    provincia: "",
    address: "",
    pivotuser: false,
  });

  useEffect(() => {
    // Cuando se actualice la información de usuario (infouser), actualiza el estado local (formData)
    if (infouser) {
      setFormData({
        name: infouser.name || "",
        surname: infouser.surname || "",
        email: infouser.email || "",
        phone: infouser.phone || "",
        provincia: infouser.provincia || "",
        address: infouser.address || "",
        pivotuser: true,
      });
    }
  }, [infouser]);
  const [selectedKey, setSelectKey] = useState("1");
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
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={keySelect}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Perfil",
            },
            {
              key: "2",
              icon: <UnorderedListOutlined />,
              label: "Mis Reseñas",
              Content: <h1></h1>,
            },
            {
              key: "3",
              icon: <ShoppingOutlined />,
              label: "Mis Pedidos",
            },
            {
              key: "4",
              icon: <EditOutlined />,
              label: "Editar Perfil",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}></Header>
        <Content className={style.layaout1}>
          {selectedKey === "1" && <DataProfile />}
          {selectedKey === "4" && (
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
