// import "./App.css";

// function App() {
//   return <>

//   </>;
// }

// export default App;
import { ConfigProvider } from "antd";
import React from "react";

const App: React.FC = () => (
  <ConfigProvider 
  theme={{ 
    token: { 
      colorPrimary: "#00b96b" 
    }
    }}>
    <MyApp />
  </ConfigProvider>
);

export default App;
