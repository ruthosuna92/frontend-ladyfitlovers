import {
  UserOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UploadOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import { useNavigate } from "react-router";

const SideBarDashboard = () => {
  const navigate = useNavigate();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem("Usuarios", "1", <UserOutlined />),
    getItem("Productos", "2", <ShopOutlined />),
    getItem("Ordenes de compra", "3", <ShoppingCartOutlined />),
    getItem("Crear producto", "4", <UploadOutlined />),
    getItem("Resumen", "5", <LineChartOutlined />),
 
    
  ];
  const handleMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    switch (key) {
      case "1":
        navigate("/admin/usuarios");
        break;
      case "2":
        navigate("/admin/productos");
        break;
      case "3":
        navigate("/admin/ordenes");
        break;
      case "4":
        navigate("/admin/crear-producto");
        break;
      case "5":
        navigate("/admin");
        break;
    
      default:
        console.log("default");
        break;
    }
  };
  
  return (
    <>
      {/* <br />
      <br /> */}
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={[""]}
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

//PruebaCommit