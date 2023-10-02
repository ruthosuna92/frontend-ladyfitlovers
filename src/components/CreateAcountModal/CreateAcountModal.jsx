import React from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import CreateAcountForm from "./CreateAcountForm";
import CreateAcountSchema from "./createAcountSchema";


const CreateAcountModal = ({ visible, onClose }) => {

  return (
    <Modal
      title="Crear cuenta"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Formik 
      initialValues={{ name:"", surname:"", address:"", phone:"", email:"" , password:"" , confirmPassword:"" }}
      validationSchema={CreateAcountSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <CreateAcountForm onClose={onClose}/>
          </Form>
        )}

      </Formik>
    </Modal>
  );
};

export default CreateAcountModal;
