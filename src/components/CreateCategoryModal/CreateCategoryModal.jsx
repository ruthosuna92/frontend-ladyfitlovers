import React from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import CreateCategoryForm from "./CreateCategoryForm";


const CreateCategoryModal = ({ visible, onClose }) => {

  return (
    <Modal
      title="Crear categoría"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Formik 
      initialValues={{ name: "" }}
      >
        {({ errors, touched }) => (
          <Form>
            <CreateCategoryForm onClose={onClose}/>
          </Form>
        )}

      </Formik>
    </Modal>
  );
};

export default CreateCategoryModal;
