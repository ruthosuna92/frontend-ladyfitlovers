import React from "react";
//importamos ant design
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: "#00b96b",
        borderRadius: 2,

        // Alias Token
        colorBgContainer: "#f6ffed",
      },
    }}
  ></ConfigProvider>
);

export default App;
