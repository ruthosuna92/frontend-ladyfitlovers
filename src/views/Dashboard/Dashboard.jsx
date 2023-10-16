import { useLocation } from "react-router";
import SideBarDashboard from "../../components/SideBar/SideBarDashboard/SideBarDashboard";
import UsersTable from "./UsersTable/UsersTable";
import ProductsTable from "./ProductsTable/ProductsTable";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import OrdersTable from "./OrderTable/OrdersTable";
import Panel from "./Panel/Panel";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Barra lateral */}
      <SideBarDashboard />
      {/* Contenido principal */}
      <div style={{ flex: 1, overflowY: "auto", padding: 32 }}>
        {location.pathname === "/admin" && <Panel/>}
        {location.pathname === "/admin/usuarios" && <UsersTable />}
        {location.pathname === "/admin/productos" && <ProductsTable />}
        {location.pathname === "/admin/ordenes" && <OrdersTable/>}
        {location.pathname === "/admin/crear-producto" && <CreateProduct/>}
      </div>
    </div>
  );
};

export default Dashboard;
