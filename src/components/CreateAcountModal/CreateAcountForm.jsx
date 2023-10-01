import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { Field, useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./createAcountModal.css";
import postUser from "../../redux/Actions/postUser";

const CreateAcountForm = ({ onClose }) => {
  const { values, errors, resetForm } = useFormikContext();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

 

  const handleSubmit = async () => {
    try {
       const response = await dispatch(postUser(values))   
       
       if(response.message === "Usuario creado correctamente"){  message.success(response.message, [2], onClose())}else{
        message.error("Error al crear la cuenta", [2], onClose())
       }   
        onClose();
        resetForm();

    }catch{
        message.error("Error al crear la cuenta", [2], onClose())
    }
  };

  return (
    <>
      <div className="containerFormCreateAcount">
        <Field id="name" name="name">
          {/* Todos los field tienen que tener un name y un id por defecto, lo que cambia es el valor que yo le envìo */}
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <Input {...field} placeholder="Nombre" autoComplete="off" />
                {errors.name && (
                  <p className="createProductError">{errors.name}</p>
                )}
              </div>
            );
          }}
        </Field>
        <Field id="surname" name="surname">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <Input {...field} placeholder="Apellido" autoComplete="off" />
                {errors.surname && (
                  <p className="createProductError">{errors.surname}</p>
                )}
              </div>
            );
          }}
        </Field>
        <Field id="phone" name="phone">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <Input
                  {...field}
                  placeholder="Teléfono/celular"
                  autoComplete="off"
                />
                {errors.phone && (
                  <p className="createProductError">{errors.phone}</p>
                )}
              </div>
            );
          }}
        </Field>
        <Field id="address" name="address">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <Input {...field} placeholder="Dirección" autoComplete="off" />
                {errors.address && (
                  <p className="createProductError">{errors.address}</p>
                )}
              </div>
            );
          }}
        </Field>
        <Field id="email" name="email">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <Input {...field} placeholder="Email" autoComplete="off" />
                {errors.email && (
                  <p className="createProductError">{errors.email}</p>
                )}
              </div>
            );
          }}
        </Field>
        <Field id="password" name="password">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <div className="inputCreateAcountContainer">
                  <Input.Password
                    {...field}
                    placeholder="Password"
                    autoComplete="off"
                    visibilityToggle={{
                      visible: showPassword,
                      onVisibleChange: !showPassword,
                    }}
                  />
                  <Button
                    style={{
                      width: 80,
                    }}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </Button>
                </div>
                {errors.password && (
                  <p className="createProductError">{errors.password}</p>
                )}
              </div>
            );
          }}
        </Field>
        {/* <Field id="confirmPassword" name="confirmPassword">
        {({ field, form, meta, error }) => {
          return (
            <div className="fieldAndError">
               <div className="inputCreateAcountContainer">
                <Input.Password
                  {...field}
                  placeholder="Confirmar Password"
                  autoComplete="off"
                  visibilityToggle={{
                    visible: showPassword,
                    onVisibleChange: !showPassword,
                  }}
                />
                <Button
                  style={{
                    width: 80,
                  }}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </Button>
              </div>
              {errors.confirmPassword && (<p className="createProductError">{errors.confirmPassword}</p>)}
            </div>
          );
        }}
      </Field> */}
        <div className="createCategoryButtons">
          <ButtonSecondary
            title="Cancelar"
            type="button"
            onClick={() => onClose()}
          />
          <ButtonPrimary
            title="Crear"
            type="button"
            onClick={() => handleSubmit()}
            disbled={
              errors.name ||
              errors.surname ||
              errors.phone ||
              errors.address ||
              errors.email ||
              errors.password
            }
          />
        </div>
      </div>
    </>
  );
};

export default CreateAcountForm;
