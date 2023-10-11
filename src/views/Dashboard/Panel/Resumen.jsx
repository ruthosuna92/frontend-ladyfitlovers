import React from "react";
import "./resumen.css";
import { Card } from "antd";
import { formatCurrency } from "../../../utils/formatCurrent";

const Resumen = ({ allOrders }) => {
  const today = new Date();

  const todayOrders = allOrders?.filter((order) => {
    const orderDate = new Date(order.orderDate);
    return (
      orderDate.getDate() === today.getDate() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getFullYear() === today.getFullYear()
    );
  });

  return (
    <div>
      <div className="titleContainer">
        <h1>Resumen</h1>
      </div>
      <div className="resumenContainer">
        <Card
          title="Total de ordenes :"
          style={{ width: "300%" }}
          hoverable={true}
          bordered={false}
          headStyle={{ backgroundColor: "#F5F5F5" }}
          bodyStyle={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="resumenInfo">
            <p style={{ margin: 0 }}>{allOrders?.length}</p>
          </div>
        </Card>

        <Card
          title="Total recaudado :"
          style={{ width: "300%" }}
          hoverable={true}
          bordered={false}
          headStyle={{ backgroundColor: "#F5F5F5" }}
          bodyStyle={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="resumenInfo">
            <p style={{ margin: 0 }}>
             
              {formatCurrency(allOrders.reduce(
                (acc, order) => acc + Number(order.totalAmount),
                0
              ))}
            </p>
          </div>
        </Card>
        <Card
          title="Ordenes de hoy :"
          style={{ width: "300%" }}
          hoverable={true}
          bordered={false}
          headStyle={{ backgroundColor: "#F5F5F5" }}
          bodyStyle={{ backgroundColor: "#F5F5F5" }}
        >
            <div className="resumenInfo">
            <p style={{ margin: 0 }}>{todayOrders?.length}</p>
          </div>
          
        </Card>

      </div>
    </div>
  );
};

export default Resumen;
