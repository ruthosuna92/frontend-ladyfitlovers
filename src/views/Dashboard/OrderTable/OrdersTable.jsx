import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { Button,Table, Tag } from "antd";
import {
  EditOutlined,
} from "@ant-design/icons";
import OrderExpandedRow from "./OrderExpandedRow";
import UpdateOrderModal from "./UpdateOrderModal";

const OrdersTable = () => {
  const allOrders = useSelector((state) => state.allOrders);
  const tableOrders = allOrders.map((order) => {
    return {
      ...order,
      key: order.id,
    };
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [order, setOrder] = useState({});

  const paymentIdFilters = allOrders?.map((order) => {
    return {
      text: order.mercadopagoTransactionId,
      value: order.mercadopagoTransactionId,
    };
  });

  const emailFilters = allOrders?.map((order) => {
    return { text: order?.User?.email, value: order?.User?.email };
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
      title: "Comprador",
      dataIndex: "",
      key: 2,
      render: (cell) => <p>{cell?.User?.name}</p>,
    },
    {
      title: "Dirección de envío",
      dataIndex: "",
      key: 8,
      render: (cell) => <p>{cell?.User?.address? `${cell?.User?.address.calle} ${cell?.User?.address.numero} ${cell?.User?.address.dpto} ${cell?.User?.address.entreCalles} ${cell?.User?.address.localidad} ${cell?.User?.address.provincia} ${cell?.User?.address.codigoPostal}` : "No especificada"}</p>,
    },
    {
      title: "Teléfono",
      dataIndex: "",
      key: 9,
      render: (cell) => <p>{cell?.User?.phone || "No especificado"}</p>,
    },
    {
      title: "Email",
      dataIndex: "",
      key: 3,
      filters: emailFilters,
      filterSearch: true,
      onFilter: (value, record) => record.User.email.indexOf(value) === 0,
      render: (cell) => <p>{cell?.User?.email}</p>,
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
      key: 4,
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Id pago",
      dataIndex: "mercadopagoTransactionId",
      key: 5,
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
      key: 6,
      render: (text, record) => {
        return <Tag color={colorStatus(record.status)}>{text}</Tag>;
      },
    },
    {
      title: "Cambiar estado",
      dataIndex: "",
      key: 7,
      render: (text, record) => {
        return (
          <div>
            <Button
              type="primary"
              icon={<EditOutlined />}
              size="small"
              onClick={() => {
                setShowEditModal(true), setOrder(record);
              }}
            />
          </div>
        );
      },
    },
  ];



  return (
    <div>
      {order && showEditModal && (
        <UpdateOrderModal
          order={order}
          visible={showEditModal}
          onClose={() => setShowEditModal(false)}
        />
      )}
      <Table
        dataSource={tableOrders}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <OrderExpandedRow products={record.products} />
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        style={{ overflowX: "scroll" }}
      />
    </div>
  );
};

export default OrdersTable;
