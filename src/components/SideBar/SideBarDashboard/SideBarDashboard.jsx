
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { useState } from 'react';
const SideBarDashboard = () => {
    function getItem(label, key, icon, children) {
      return {
        key,
        icon,
        children,
        label,
      };
    }
    const items = [
      getItem('Navigation One', '1', <MailOutlined />),
      getItem('Navigation Two', '2', <CalendarOutlined />),
      getItem('Navigation Two', 'sub1', <AppstoreOutlined />),
      getItem('Navigation Three', 'sub2', <SettingOutlined />),
      getItem(
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Ant Design
        </a>,
        'link',
        <LinkOutlined />,
      ),
    ];
    const handleMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        console.log(selectedKeys);
    }
//   const [mode, setMode] = useState('inline');
//   const [theme, setTheme] = useState('light');
//   const changeMode = (value) => {
//     setMode(value ? 'vertical' : 'inline');
//   };
//   const changeTheme = (value) => {
//     setTheme(value ? 'dark' : 'light');
//   };
  return (
    <>
      {/* <br />
      <br /> */}
      <Menu
        style={{
            width: 256,
        }}
        defaultSelectedKeys={['1']}
        //defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        items={items}
        onSelect={handleMenu}
      />
        {/* <Switch onChange={changeMode} /> Change Mode
        <Divider type="vertical" />
        <Switch onChange={changeTheme} /> Change Style */}
    </>
  );
};
export default SideBarDashboard;