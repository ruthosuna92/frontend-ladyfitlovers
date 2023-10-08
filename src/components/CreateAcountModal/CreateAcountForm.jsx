import React, { useState , useEffect } from "react";
import { Input, Button, message, Select } from "antd";
import { Field, useFormikContext } from "formik";
import { useDispatch} from "react-redux";
import { provincias } from "./Provincias";
import { saveImage } from "../CreateProduct/saveImage";
import AvatarEditor from "react-avatar-editor";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import updateUser from "../../redux/Actions/User/updateUser";
import postUser from "../../redux/Actions/User/postUser";
import getUserById from "../../redux/Actions/User/getUserById"
import editPhoto from "../editPhoto/editPhoto";
import getAllUsers from "../../redux/Actions/User/getAllUsers";
import "./createAcountModal.css";
import "./createAcountForm.css"

const CreateAcountForm = ({ onClose, pivotuser, dataAddress, idUser, isEditing }) => {

  const { values, errors, resetForm } = useFormikContext();
  const [selectedImage, setSelectedImage] = useState({
    saveImage: null,
    urlImage: "",
  }); // Paso 2: Crea una variable de estado para la imagen
  // Paso 3: Maneja el cambio de archivo de imagen
  const handleImageChange = (event) => {
    setSelectedImage({
      ...selectedImage,
      saveImage: event.target.files[0]
    });
  };
  useEffect(() => {
    async function fetchImage() {
      if (selectedImage.saveImage) {
        try {
          const imageUrl = await saveImage(selectedImage.saveImage);
          setSelectedImage((prevImage) => ({
            ...prevImage,
            urlImage: imageUrl,
          }));
        } catch (error) {
          // Manejar errores si es necesario
        }
      }
    }
  
    fetchImage(); // Llama a la función async inmediatamente
  
  }, [selectedImage.saveImage]);
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();



  const handleSubmit = async () => {
    setLoading(true);
    const address = `${values.calle} ${values.numero} ${values.dpto}, entre: ${values.entreCalles}, ${values.localidad} - CP: ${values.codigoPostal}, ${values.provincia}`;

    const valuesToSend = {
      name: values.name,
      surname: values.surname,
      phone: values.phone,
      address: address,
      email: values.email,
      password: values.password
    }

    try {
      const response = await dispatch(postUser(valuesToSend));

      if (response.message === "Usuario creado correctamente") {
        message.success(response.message, [2], onClose());
      } else {
        message.error("Error al crear la cuenta", [2], onClose());
      }
      onClose();
      resetForm();
      setLoading(false);
    } catch {
      message.error("Error al crear la cuenta", [2], onClose());
    }
  };
  const handleSubmitupdate = async () => {
    const address = `${values.calle} ${values.numero} ${values.dpto}, entre: ${values.entreCalles}, ${values.localidad} - CP: ${values.codigoPostal}, ${values.provincia}`;
  
    const valuesToSend = {
      id: idUser,
      name: values.name,
      surname: values.surname,
      phone: values.phone,
      address: address,
      email: values.email,
      image: selectedImage.urlImage
    }
    console.log(valuesToSend)

    try {
      const response = await dispatch(updateUser(valuesToSend));
      console.log(response);
      dispatch(getUserById(valuesToSend.id));

      if (response.message === "Usuario editado correctamente") {
        message.success(response.message);
        resetForm(); // Restablece los valores del formulario
      } else {
        message.error("Error al editar la cuenta");
      }
    } catch {
      message.error("hola");
    }
  }
  const handleEdit = async () => {
    setLoading(true);
    const address= `${values.calle} ${values.numero} ${values.dpto}, entre: ${values.entreCalles}, ${values.localidad} - CP: ${values.codigoPostal}, ${values.provincia}`;

    const checkNewAddress = values.calle && values.numero && values.dpto && values.entreCalles && values.localidad && values.codigoPostal && values.provincia

    const valuesToSend = {
      id: values.id,
      name: values.name,
      surname: values.surname,
      phone: values.phone,
      address: checkNewAddress ?  address : values.address ,
      email: values.email,
      password: values.password,
      userBan: values.userBan
    }


    try {
      const response = await dispatch(updateUser(valuesToSend)); // cambiar por putUser

      if (response.message === "Usuario editado correctamente") {
        message.success(response.message, [2], onClose());
        setLoading(false);
      } else {
        message.error("Error al editar el usuario" , [2], onClose());
      }
      onClose();
      resetForm();
      dispatch(getAllUsers())
    } catch {
        message.error("Error al editar el usuario" , [2], onClose());
    }
  };

  return (
    <>
      <div className="containerFormCreateAcount">
        { pivotuser ? <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />: ""
        }
        
        <Field id="name" name="name">
          {/* Todos los field tienen que tener un name y un id por defecto, lo que cambia es el valor que yo le envìo */}
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <Input {...field} placeholder="Nombre*" autoComplete="off" />
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
                <Input {...field} placeholder="Apellido*" autoComplete="off" />
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
                  placeholder="Teléfono/celular*"
                  autoComplete="off"
                />
                {pivotuser ? "" : errors.phone && (
                  <p className="createProductError">{errors.phone}</p>
                )}
              </div>
            );
          }}
        </Field>
        {
          pivotuser ? <p>Direccion actual: {dataAddress}</p> : ""
        }
        {
          isEditing ? <p>Direccion actual: {values.address}</p> : ""
        }
        <div className="createAcountCalleNumDpto">
          <Field id="calle" name="calle">
            {({ field, form, meta, error }) => {
              return (
                <div className="fieldAndError">
                  <Input {...field} placeholder="Calle*" autoComplete="off" />
                  {errors.calle && (
                    <p className="createProductError">{errors.calle}</p>
                  )}
                </div>
              );
            }}
          </Field>
          <Field id="numero" name="numero">
            {({ field, form, meta, error }) => {
              return (
                <div className="fieldAndError">
                  <Input {...field} placeholder="Número*" autoComplete="off" />
                  {errors.numero && (
                    <p className="createProductError">{errors.numero}</p>
                  )}
                </div>
              );
            }}
          </Field>
          <Field id="dpto" name="dpto">
            {({ field, form, meta, error }) => {
              return (
                <div className="fieldAndError">
                  <Input {...field} placeholder="Dpto" autoComplete="off" />
                  {errors.dpto && (
                    <p className="createProductError">{errors.dpto}</p>
                  )}
                </div>
              );
            }}
          </Field>
        </div>
        <Field id="entreCalles" name="entreCalles">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <Input
                  {...field}
                  placeholder="Entre calles*"
                  autoComplete="off"
                />
                {errors.entreCalles && (
                  <p className="createProductError">{errors.entreCalles}</p>
                )}
              </div>
            );
          }}
        </Field>
        <div className="createAcountCalleNumDpto">
          <Field id="localidad" name="localidad">
            {({ field, form, meta, error }) => {
              return (
                <div className="fieldAndError">
                  <Input {...field} placeholder="Localidad*" autoComplete="off" />
                  {errors.localidad && (
                    <p className="createProductError">{errors.localidad}</p>
                  )}
                </div>
              );
            }}
          </Field>
          <Field id="codigoPostal" name="codigoPostal">
            {({ field, form, meta, error }) => {
              return (
                <div className="fieldAndError">
                  <Input
                    {...field}
                    placeholder="Código postal*"
                    autoComplete="off"
                  />
                  {errors.codigoPostal && (
                    <p className="createProductError">{errors.codigoPostal}</p>
                  )}
                </div>
              );
            }}
          </Field>
        </div>
        <Field id="provincia" name="provincia">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <Select
                  {...field}
                  options={provincias}
                  onChange={(value) => form.setFieldValue("provincia", value)}
                  style={{ width: "100%" }}
                />
                {errors.provincia && (
                  <p className="createProductError">{errors.provincia}</p>
                )}
              </div>
            );
          }}
        </Field>
        <Field id="email" name="email">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                {
                  pivotuser ? <Input {...field} placeholder="Email*" autoComplete="off" disabled /> :
                    <Input {...field} placeholder="Email*" autoComplete="off" />
                }
                {errors.email && (
                  <p className="createProductError">{errors.email}</p>
                )}
              </div>
            );
          }}
        </Field>
        {!isEditing && <Field id="password" name="password">
          {({ field, form, meta, error }) => {
            return (
              <div className="fieldAndError">
                <div className="inputCreateAcountContainer">
                  {
                    pivotuser ? "" :
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password*"
                        autoComplete="off"
                      />

                  }
                  {
                    pivotuser ? "" :
                      <Button
                        style={{
                          width: 80,
                        }}
                        onClick={() => setShowPassword((prevState) => !prevState)}
                      >
                        {showPassword ? "Ocultar" : "Mostrar"}
                      </Button>
                  }
                </div>
                {pivotuser ? "" : errors.password && (
                  <p className="createProductError">{errors.password}</p>
                )}
              </div>
            );
          }}
        </Field>}

        <div className="createCategoryButtons">
          {
            pivotuser ? "" : <ButtonSecondary
              title="Cancelar"
              type="button"
              onClick={() => onClose()}
            />
          }

          {
            pivotuser ? <ButtonPrimary
              title="Actualizar"
              type="button"
              onClick={() => handleSubmitupdate()}
              disbled={
                errors.name ||
                errors.surname ||
                errors.calle ||
                errors.numero ||
                errors.entreCalles ||
                errors.localidad ||
                errors.codigoPostal ||
                errors.provincia

              }
            /> :
              <ButtonPrimary
                title={isEditing ? "Editar" : "Crear"}
                type="button"
                onClick={isEditing ? handleEdit : handleSubmit}
                disbled={
                  errors.name ||
                  errors.surname ||
                  errors.phone ||
                  errors.calle ||
                  errors.numero ||
                  errors.entreCalles ||
                  errors.localidad ||
                  errors.codigoPostal ||
                  errors.provincia ||
                  errors.email ||
                  errors.password  ||
                  loading
                }
              />
          }


        </div>
      </div>
    </>
  );
};

export default CreateAcountForm;
