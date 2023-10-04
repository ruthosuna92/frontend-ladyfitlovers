import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined ,
  UserOutlined,
  UnorderedListOutlined ,
  EditOutlined, 
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import DataProfile from "../DataProfile/DataProfile"
import style from "./ProfileLayout.module.css"

const { Header, Sider, Content } = Layout;
const ProfileLayout =()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectKey] = useState("1")
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const keySelect=({ key })=>{
    setSelectKey(key);
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onSelect={keySelect}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Perfil',
            },
            {
              key: '2',
              icon: <UnorderedListOutlined />,
              label: 'Mis Reseñas',
              Content: <h1></h1>
            },
            {
              key: '3',
              icon: <ShoppingOutlined />,
              label: 'Mis Pedidos',
            },
            {
              key: '4',
              icon: <EditOutlined />,
              label: 'Editar Perfil',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className={collapsed ? style.layaout : style.layaout2}
          >
          {selectedKey === '1' && <DataProfile />}
        </Content>
      </Layout>
    </Layout>
  );
}
export default ProfileLayout