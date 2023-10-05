import { Button, Switch, Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./productsTable.css";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ProductsTable = () => {
  const products = useSelector((state) => state.allProducts);
  
  const columns = [
    {
      title: "Imagen",
      dataIndex: "image",
      key: "image",
      render: (image) => <img src={image} className="productsTableImage" />,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text.toUpperCase()}</p>,
    },
    {
      title: "Categoria",
      dataIndex: "Category",
      key: "Category",
      render: (category) => <p>{category.name}</p>,
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
      render: (price) => <p>${price}</p>,
    },
    {
      title: "Unidades Vendidas",
      dataIndex: "unitsSold",
      key: "unitsSold",
      render: (stock) => <p>{stock}</p>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock) => {
        if(stock.length >= 0) {
            return <p>{stock[0]?.size}</p>;
            } else {
            return <p>0</p>;
            }
      },
    },
    {
      title: "Acciones",
      dataIndex: "",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="primary"
              icon={<EditOutlined />}
              size="small"
              onClick={() => {}}
            />
            <Button
              type="secondary"
              icon={<DeleteOutlined />}
              size="small"
              onClick={() => {}}
            />
            
          </div>
        );
      },
    },
    {
        title: "Activo",
        dataIndex: "active",
        key: "active",
        render: (value) => {
            console.log(value)
          return (
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked={value === true ? true : false}
              onChange={()=> setShowBanModal(true)}
            />
          )
        }
    }
  ];
  return (
    <div>
      <Table dataSource={products} columns={columns} />
    </div>
  );
};

export default ProductsTable;
