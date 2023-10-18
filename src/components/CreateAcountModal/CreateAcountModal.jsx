import React from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import CreateAcountForm from "./CreateAcountForm";
import { CreateAcountSchema, UpdateAcountSchema } from "./createAcountSchema";

const CreateAcountModal = ({ visible, onClose, isEditing, user }) => {

  const initialValues = {
    name: "",
    surname: "",
    address: {
      calle: "",
      numero: "",
      dpto: "",
      entreCalles: "",
      localidad: "",
      codigoPostal: "",
      provincia: ""
    },
    phone: "",
    email: "",
    password: ""
  }

  const userInitialValues = {
    id: user?.id,
    name: user?.name,
    surname: user?.surname,
    address: {
      calle: user?.address?.calle || "" ,
      numero: user?.address?.numero || "",
      dpto: user?.address?.dpto || "",
      entreCalles: user?.address?.entreCalles || "",
      localidad: user?.address?.localidad || "",
      codigoPostal: user?.address?.codigoPostal || "",
      provincia:  user?.address?.provincia || ""
    },
    phone: user?.phone,
    email: user?.email,
    userBan: user?.userBan,
    typeUser: user?.typeUser,
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
        validationSchema={isEditing ? UpdateAcountSchema : CreateAcountSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <CreateAcountForm onClose={onClose} isEditing={isEditing} />
          </Form>
        )}
      </Formik>
    </Modal>
  )
};

export default CreateAcountModal;


// address = {
//   calle,
//   numero,
//   dpto,
//   entreCalles,
//   localidad,
//   provincia,
//   codigoPostal
//   }