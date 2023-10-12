import React, { useEffect, useState } from "react";
import { Field, useFormikContext, FieldArray } from "formik";
import { Input, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { saveImage } from "./saveImage";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import ButtonTertiary from "../ButtonTertiary/ButtonTertiary";
import postProduct from "../../redux/Actions/Product/postProduct";
import CreateCategoryModal from "../CreateCategoryModal/CreateCategoryModal";
import "./createProductForm.css";
import updateProduct from "../../redux/Actions/Product/updateProduct";

const CreateProductForm = ({ errors, isEditing }) => {
  const categories = useSelector((state) => state.allCategories);
  const accessToken = useSelector((state) => state.accessToken);
  const { values, setFieldValue, resetForm } = useFormikContext();
  const [errorColor, setErrorColor] = useState(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const dispatch = useDispatch();

  const categoriesOptions = categories?.map((category) => {
    return { value: category.name, label: category.name };
  });
  if (categoriesOptions) {
    categoriesOptions.unshift({ value: "", label: "Selecciona una categoria" });
  }

  const categoryUpdateOptions = categories?.map((category) => {
    return { value: category.id, label: category.name };
  });

  const colorOptions = [
    { value: "", label: "Selecciona un color" },
    { value: "red", label: "Rojo" },
    { value: "blue", label: "Azul" },
    { value: "green", label: "Verde" },
    { value: "yellow", label: "Amarillo" },
    { value: "violet", label: "Violeta" },
    { value: "orange", label: "Naranja" },
    { value: "pink", label: "Rosado" },
    { value: "black", label: "Negro" },
    { value: "white", label: "Blanco" },
  ];
  const handleSubmit = async () => {
    const urlImage = await saveImage(values.image); //values es de formik
    try {
      const response = await dispatch(
        postProduct({
          name: values.name,
          price: values.price,
          priceOnSale: values.priceOnSale,
          unitsSold: values.unitsSold,
          image: urlImage,
          category: values.category,
          stock: values.stock,
        },
        accessToken)
      );

      message.success(response.message, [2], onClose());

      resetForm();
    } catch {
      message.error("Error al crear producto", [2], onClose());
    }
  };
  const handleEdit = async () => {
    try {
      const response = await dispatch(
        updateProduct({
          id: values.id,
          name: values.name,
          price: values.price,
          priceOnSale: values.priceOnSale,
          unitsSold: values.unitsSold,
          image: values.image,
          category: values.category,
          stock: values.stock,
          active: values.active,
        }, accessToken)
      );

      message.success(response.message, [2], onClose());

      resetForm();
    } catch {
      message.error("Error al crear producto", [2], onClose());
    }
  };

  const onChange = (value, index) => {
    if (values.stock.some((element) => element.color === value)) {
      setErrorColor({
        index: index,
        message: "Ya has seleccionado este color",
      });
    }
    if (!values.stock.some((element) => element.color === value)) {
      setErrorColor(false);
    }
    setFieldValue(`stock.${index}.color`, value);
  };

  const onChangeCategories = (value) => {
    setFieldValue("category", value);
  };

  return (
    <>
      {showCreateCategoryModal && (
        <CreateCategoryModal
          visible={showCreateCategoryModal}
          onClose={() => setShowCreateCategoryModal(false)}
        />
      )}
      <div className="containerForm">
        <Field id="name" name="name">
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
        <div className="inputsContainer">
          <Field id="price" name="price">
            {({ field, form, meta }) => {
              return (
                <div className="fieldAndError">
                  <Input {...field} placeholder="Precio" />
                  {errors.price && (
                    <p className="createProductError">{errors.price}</p>
                  )}
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
              );
            }}
          </Field>
        </div>
        <div className="inputsContainer">
          <div className="fieldAndError">
            {!isEditing && (
              <>
                <Input
                  type="file"
                  placeholder="Imagen"
                  onChange={(e) => setFieldValue("image", e.target.files[0])}
                />
                {errors.image && (
                  <p className="createProductError">{errors.image}</p>
                )}
              </>
            )}
          </div>

          {!isEditing && (
            <Field id="category" name="category">
              {({ field, form, meta }) => {
                return (
                  <div className="fieldAndError">
                    <Select
                      {...field}
                      options={
                        isEditing ? categoryUpdateOptions : categoriesOptions
                      }
                      onChange={(value) => onChangeCategories(value)}
                      style={{ width: "100%" }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCreateCategoryModal(true)}
                      className="createCategoryButton"
                    >
                      Crear categoría
                    </button>
                    {errors.category && (
                      <p className="createProductError">{errors.category}</p>
                    )}
                  </div>
                );
              }}
            </Field>
          )}
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
                              {errorColor.index === index && (
                                <p className="createProductError">
                                  {errorColor.message}
                                </p>
                              )}
                            </div>
                          );
                        }}
                      </Field>
                    </div>
                    <div className="inputsContainer">
                      {stock?.sizeAndQuantity?.length > 0 &&
                        stock?.sizeAndQuantity.map(
                          (sizeAndQuantity, index2) => (
                            <div className="inputsStockContainer" key={index2}>
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
                          )
                        )}
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
                  title="Agregar stock"
                  onClick={() =>
                    push({
                      color: "",
                      sizeAndQuantity: [
                        { size: "S", quantity: 0 },
                        { size: "M", quantity: 0 },
                        { size: "L", quantity: 0 },
                        { size: "XL", quantity: 0 },
                      ],
                    })
                  }
                />
              </div>
            </div>
          )}
        </FieldArray>
        <ButtonPrimary
          title={isEditing ? "Editar producto" : "Crear producto"}
          onClick={isEditing ? handleEdit : handleSubmit}
          disabled={
            errors.name ||
            errors.price ||
            errors.category ||
            errors.image ||
            errors.stock ||
            errorColor.message
          }
        />
      </div>
    </>
  );
};

export default CreateProductForm;
