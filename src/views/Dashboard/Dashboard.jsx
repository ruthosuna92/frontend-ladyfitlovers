import SideBarDashboard from "../../components/SideBar/SideBarDashboard/SideBarDashboard"

const Dashboard = () => {

    return  <div style={{ display: 'flex', height: '100vh' }}>
    {/* Barra lateral */}
    <SideBarDashboard />
    {/* Contenido principal */}
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <p>Tablero</p>
      {/* Agrega aquí el contenido principal de tu tablero */}
    </div>
  </div>
}

export default Dashboard