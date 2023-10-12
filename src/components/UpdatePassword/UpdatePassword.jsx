import React, { useState } from "react";
import { Input, Divider } from "antd";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import updateUser from "../../redux/Actions/User/updateUser";

const UpdatePassword = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState({
    errorPasscurrent: "",
    errorPassNew: ""
  });
  console.log(error);
  const [updatePassword, setUpdatePassword] = useState({
    passwordActual: "",
    passwordNueva: "",
    passwordNueva2: "",
  });
  useEffect(()=>{
    if (updatePassword.passwordNueva === updatePassword.passwordNueva2) {
      setError({
        ...error,
        passwordNueva:""
      });
    }
    validate()
  },[updatePassword.passwordNueva2, updatePassword.passwordActual])
  const handleChangePasswordActual = (event) => {
    const { value } = event.target;
    setUpdatePassword({
      ...updatePassword,
      passwordActual: value,
    });
  };

  const handleChangePasswordNew = (event) => {
    const { name, value } = event.target;
    setUpdatePassword({
      ...updatePassword,
      [name]: value,
    });
  };

  const validate = () => {
    const errorpass={
      error1:"",
      error2:""
    }
    if (updatePassword.passwordNueva !== updatePassword.passwordNueva2) {
      errorpass.error1="Las contraseñas nuevas no coinciden"
    }
    if(updatePassword.passwordActual === ""){
      errorpass.error2="Tienes que colocar tu contraseña actual"
    }else{
      errorpass.error2=""
    }
    setError({
      ...error,
      errorPasscurrent: errorpass.error2,
      errorPassNew: errorpass.error1
    })
  };
  const handleSumit =()=>{
    if(error.errorPassNew === "" && error.errorPasscurrent === ""){
      const {passwordActual, passwordNueva}=updatePassword
      //dispatch(updateUser({passwordActual, passwordNueva}))
    }
  }

  return (
    <div>

      <Input
        placeholder="Contraseña Actual*"
        autoComplete="off"
        onChange={handleChangePasswordActual}
        value={updatePassword.passwordActual}
      />
      {error.errorPasscurrent && <p style={{ color: "red" }}>{error.errorPasscurrent}</p>}
      <Divider orientation="left">Ingrese la nueva contraseña</Divider>
      <Input
        placeholder="Contraseña Nueva*"
        autoComplete="off"
        name="passwordNueva"
        type="password"
        onChange={handleChangePasswordNew}
        value={updatePassword.passwordNueva}
      />
      <Divider orientation="left">Ingrese nuevamente la contraseña</Divider>
      <Input
        placeholder="Contraseña Nueva*"
        autoComplete="off"
        name="passwordNueva2"
        type="password"
        onChange={handleChangePasswordNew}
        value={updatePassword.passwordNueva2}
        />
      <br />
      {error.errorPassNew && <p style={{ color: "red" }}>{error.errorPassNew}</p>}
      
      <ButtonPrimary title="Actualizar" onClick={handleSumit}/>
    </div>
  );
};

export default UpdatePassword;

