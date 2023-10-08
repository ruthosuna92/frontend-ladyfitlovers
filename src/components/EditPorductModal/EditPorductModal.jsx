import React from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import CreateProductForm from "../CreateProduct/CreateProductForm";
import CreateProductSchema from "../CreateProduct/createProduct.schema";

const EditProductModal = ({ visible, onClose, product }) => {
    
    const category = product.Category
    
  const initialValues = {
    id: product.id,
    name: product.name,
    price: product.price,
    priceOnSale: product.priceOnSale,
    unitsSold: product.unitsSold,
    image: product.image,
    category: category,
    stock: product.stock,
    active: product.active,
  };

  return (
    <Modal
      title={`Editar producto ${product.name}`}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width= {750}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={CreateProductSchema}

      >
        {({ errors, touched }) => (
          <Form>
            <CreateProductForm onClose={onClose} isEditing={true} errors={errors}/>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditProductModal;
