import React from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import CreateAcountForm from "./CreateAcountForm";
import CreateAcountSchema from "./createAcountSchema";


const CreateAcountModal = ({ visible, onClose, isEditing , user}) => {
console.log(user)
const initialValues = {
  name:"",
  surname:"",
  calle:"",
  numero:"",
  dpto:"",
  entreCalles:"",
  localidad:"",
  codigoPostal:"",
  provincia:"",
  phone:"",
  email:"" ,
  password:"" }

  const userInitialValues = {
    name:user?.name,
    surname:user?.surname,
    calle:"",
    numero:"",
    dpto:"",
    entreCalles:"",
    localidad:"",
    codigoPostal:"",
    provincia:"",
    phone:user?.phone,
    email:user?.email ,
    address:user?.address,
  }

  return (
    <Modal
      title="Crear cuenta"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Formik 
      initialValues={isEditing ? userInitialValues : initialValues}
      validationSchema={CreateAcountSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <CreateAcountForm onClose={onClose} isEditing={isEditing}/>
          </Form>
        )}

      </Formik>
    </Modal>
  );
};

export default CreateAcountModal;
