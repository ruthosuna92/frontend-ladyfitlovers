
import {  useSelector } from "react-redux";
import { Table, Tag } from "antd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ShoppingClient from "../ShoppingClient/ShoppingClient";
import getOrdersByUser from "../../redux/Actions/Order/getOrdersByUser";

const TableShoppingClient = () => {
  
  const ordersUser = useSelector((state) => state.ordersUser);
  const accessToken = useSelector((state) => state.accessToken);
  const userId = useSelector((state) => state.user.id);

  console.log(accessToken, "accessToken")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersByUser({userId, accessToken}));
  }, [dispatch]);
  const tableOrders = ordersUser.map((order) => {
    return {
      ...order,
      key: order.id,
    };
  });

  const paymentIdFilters =ordersUser?.map((order) => {
    return {
      text: order.mercadopagoTransactionId,
      value: order.mercadopagoTransactionId,
    };
  });

  const colorStatus = (status) => {
    switch (status) {
      case "En proceso":
        return "blue";
      case "Cancelada":
        return "red";
      case "Entregada":
        return "green";
      default:
        return "blue";
    }
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      key: 1,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Dirección de envío",
      dataIndex: "",
      key: 2,
      render: (cell) => <p>{cell?.User?.address || "No especificada"}</p>,
    },
    {
      title: "Teléfono",
      dataIndex: "",
      key: 3,
      render: (cell) => <p>{cell?.User?.phone || "No especificado"}</p>,
    },
    {
      title: "Total",
      dataIndex: "totalAmount",
      sorter: (a, b) => a.totalAmount - b.totalAmount,
      key: 4,
      render: (text) => <p>${text}</p>,
    },
    {
      title: "Fecha de compra",
      dataIndex: "orderDate",
      sorter: (a, b) => a.totalAmount - b.totalAmount,
      key: 5,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Id pago",
      dataIndex: "mercadopagoTransactionId",
      key: 6,
      filters: paymentIdFilters,
      filterSearch: true,
      onFilter: (value, record) =>
        record.mercadopagoTransactionId.indexOf(value) === 0,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Estado",
      dataIndex: "status",
      filters: [
        { text: "En proceso", value: "En proceso" },
        { text: "Cancelada", value: "Cancelada" },
        { text: "Entregada", value: "Entregada" },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      key: 7,
    },
  ];



  return (
    <div>
      <Table
        dataSource={tableOrders}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <ShoppingClient products={record.products} />
          ),
          
        }}
        style={{ overflowX: "scroll" }}
      />
    </div>
  );
};

export default TableShoppingClient;