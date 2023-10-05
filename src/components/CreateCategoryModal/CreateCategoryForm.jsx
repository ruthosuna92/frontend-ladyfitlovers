import React from "react";
import { Input } from "antd";
import { Field, useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import postCategory from "../../redux/Actions/Category/postCategory";
import getAllCategories from "../../redux/Actions/Category/getAllCategories";
import "./createCategoryModal.css";

const CreateCategoryForm = ({ onClose }) => {
  const { values } = useFormikContext();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(postCategory({ category: values.name.toUpperCase() }));
    dispatch(getAllCategories());
    onClose();
    resetForm();
  };

  return (
    <div>
      <Field id="name" name="name">
        {({ field, form, meta, error }) => {
          return (
            <div className="fieldAndError">
              <Input {...field} placeholder="Nombre" autoComplete="off" />
            </div>
          );
        }}
      </Field>
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
        />
      </div>
    </div>
  );
};

export default CreateCategoryForm;
