import { Button, Switch, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./productsTable.css";
import EditProductModal from "../../../components/EditPorductModal/EditPorductModal";
import updateProduct from "../../../redux/Actions/Product/updateProduct";
import getAllProducts from "../../../redux/Actions/Product/getAllProducts";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProductsAdmin);
  const allCatgories = useSelector((state) => state.allCategories);
 const accessToken = useSelector((state) => state.accessToken);
 const [showEditModal, setShowEditModal] = useState(false);
 const [productUpdate, setProductUpdate] = useState({});



  const sortedProducts = products?.sort((a, b) => a.name.localeCompare(b.name));

  const categoriesFilterOptions = allCatgories?.map((category) => {
    return { text: category.name, value: category.name };
  });

  const productsNames = products?.map((product) => {
    return { text: product.name, value: product.name };
  });

  

  const handleActive = async (value, product) => {
    try {
      const response = await dispatch(
        updateProduct({
          id: product.id,
          name: product.name,
          price: product.price,
          priceOnSale: product.priceOnSale || product.price,
          unitsSold: product.unitsSold,
          image: product.image,
          category: product.category,
          stock: product.stock,
          active: value,
        }, accessToken)
      );     
      message.success(response.message, [2], onClose());

      resetForm();
    } catch {
      message.error("Error al crear producto", [2], onClose());
    }
    finally {
      dispatch(getAllProducts(accessToken));
    }
  };

  
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
      sorter: (a, b) => a.name.localeCompare(b.name),
      filters: productsNames,
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      key: "name",
      render: (text) => <p>{text.toUpperCase()}</p>,
    },
    {
      title: "Categoria",
      dataIndex: "Category",
      filters: categoriesFilterOptions,
      onFilter: (value, record) => record.Category.name === value,
      key: "Category",
      render: (category) => <p>{category.name}</p>,
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => <p>${price}</p>,
    },
    {
      title: "Unidades Vendidas",
      dataIndex: "unitsSold",
      key: "unitsSold",
      render: (stock) => <p>{stock}</p>,
    },
    {
      title: "Acciones",
      dataIndex: "",
      key: "action",
      render: (cell) => {
        return (
          <div>
            <Button
              type="primary"
              icon={<EditOutlined />}
              size="small"
              onClick={() => {setShowEditModal(true), setProductUpdate(cell)}}
            />
            
          </div>
        );
      },
    },
    {
        title: "Activo",
        dataIndex: "",
        key: "active",
        render: (cell) => {
           
          return (
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked={cell.active === true ? true : false}
              onChange={()=> handleActive(cell.active === true ? false : true, cell)}
            />
          )
        }
    }
  ];
  return (
    <div>
        {productUpdate && showEditModal && (
        <EditProductModal
          visible={showEditModal}
          onClose={() => setShowEditModal(false)}
          product={productUpdate}
        />
      )}
      <Table dataSource={sortedProducts} columns={columns} />
    </div>
  );
};

export default ProductsTable;
