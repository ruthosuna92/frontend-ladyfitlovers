import React, { useState } from "react";
import { Field, useFormikContext, FieldArray } from "formik";
import { Input, Select, notification } from "antd";
import "./createProductForm.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import ButtonTertiary from "../ButtonTertiary/ButtonTertiary";

const CreateProductForm = ({ errors }) => {
  const { values, setFieldValue } = useFormikContext();
  const [errorColor,setErrorColor] = useState(false)

  const colorOptions = [
    { value: "", label: "Selecciona un color" },
    { value: "red", label: "Rojo" },
    { value: "blue", label: "Azul" },
    { value: "green", label: "Verde" },
    { value: "yellow", label: "Amarillo" },
    { value: "violet", label: "Violeta" },
    { value: "black", label: "Negro" },
    { value: "white", label: "Blanco" },
  ];
  const handleSubmit = () => {
    console.log(values);
  };

  const onChange = (value, index) => {
    if (values.stock.some((element) => element.color === value)) {
     setErrorColor({
        index: index,
        message: "Ya has seleccionado este color"
     })}
     if(!values.stock.some((element) => element.color === value)){
        setErrorColor(false)
    } 
      setFieldValue(`stock.${index}.color`, value);
    
  }
console.log(errorColor)
  return (
    <div className="containerForm">
      <Field id="name" name="name">
        {({ field, form, meta, error }) => {
          return (
            <div className="fieldAndError">
              <Input {...field} placeholder="Nombre" />
              {errors.name && <p className="createProductError">{errors.name}</p>}
            </div>
          );
        }}
      </Field>
      <div className="inputsContainer">
        <Field id="price" name="price">
          {({ field, form, meta }) => {
            return (
              <div className="fieldAndError">
                <Input {...field} placeholder="Precio" />
                {errors.price && <p className="createProductError">{errors.price}</p>}
              </div>
            );
          }}
        </Field>
        <Field id="priceOnSale" name="priceOnSale">
          {({ field, form, meta }) => {
            return (
            <div className="fieldAndError">
            <Input {...field} placeholder="Precio en oferta" />           
            </div>
            )
          }}
        </Field>
      </div>
      <div className="inputsContainer">
        <Field id="image" name="image">
          {({ field, form, meta }) => {
            return (
                <div className="fieldAndError"> 
                <Input {...field} placeholder="Imagen" />
                {errors.image && <p className="createProductError">{errors.image}</p>}                
                </div>
            )
          }}
        </Field>
        <Field id="category" name="category">
          {({ field, form, meta }) => {
            return (
                <div className="fieldAndError">
                <Input {...field} placeholder="Categoria" />
                {errors.category && <p className="createProductError">{errors.category}</p>}                
                </div>
            )
          }}
        </Field>
      </div>

      <FieldArray name="stock">
        {({ remove, push }) => (
          <div>
            {values.stock.length > 0 &&
              values.stock.map((stock, index) => (
                <div className="sizeContainer" key={index}>
                  <div className="sizeColorContainer">
                    <Field name={`stock.${index}.color`}>
                      {({ field, form, meta }) => {
                        return (
                          <div className="selectDiv">
                            <Select
                              {...field}
                              options={colorOptions}
                              onChange={(value) => onChange(value, index)}
                            />
                          {errorColor.index === index &&(
                            <p className="createProductError">{errorColor.message}</p>
                          )}
                          </div>
                          
                        )
                    
                      }}
                    </Field>
                  </div>
                  <div className="inputsContainer">
                    {stock?.sizeAndQuantity?.length > 0 &&
                      stock?.sizeAndQuantity.map((sizeAndQuantity, index2) => (
                        <div className="inputsstockContainer" key={index2}>
                          <Field
                            name={`stock.${index}.sizeAndQuantity.${index2}.size`}
                          >
                            {({ field, form, meta }) => {
                              return (
                                <div>
                                  <Input
                                    type="text"
                                    id={`stock.${index}.sizeAndQuantity.${index2}.size`}
                                    {...field}
                                    disabled
                                  />
                                  {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
                                </div>
                              );
                            }}
                          </Field>
                          <Field
                            name={`stock.${index}.sizeAndQuantity.${index2}.quantity`}
                            placeholder="quantity"
                            type="number"
                            min="0"
                          >
                            {({ field, form, meta }) => {
                              return (
                                <div>
                                  <Input
                                    type="number"
                                    id={`stock.${index}.sizeAndQuantity.${index2}.quantity`}
                                    {...field}
                                    min={0}
                                  />
                                  {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
                                </div>
                              );
                            }}
                          </Field>
                        </div>
                      ))}
                  </div>
                  <ButtonTertiary
                    type="button"
                    className="secondary"
                    onClick={() => remove(index)}
                    title="Eliminar"
                  />
                </div>
              ))}
            <div className="inputsContainer">
              <ButtonSecondary
                type="button"
                className="secondary"
                title="Agregar"
                onClick={() =>
                  push({
                    color: "",
                    sizeAndQuantity: [
                      { size: "s", quantity: 0 },
                      { size: "m", quantity: 0 },
                      { size: "l", quantity: 0 },
                      { size: "xl", quantity: 0 },
                    ],
                  })
                }
              />
            </div>
          </div>
        )}
      </FieldArray>
      <ButtonPrimary title="Crear" onClick={handleSubmit} disabled={errors.name || errors.price || errors.category || errors.image || errors.stock || errorColor.message} />
    </div>
  );
};

export default CreateProductForm;
