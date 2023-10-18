import React, { useState } from "react";
import { Input, Divider, message } from "antd";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import updateUser from "../../redux/Actions/User/updateUser";
import style from "./UpdatePassword.module.css"
import resetPassword from "../../redux/Actions/User/resetpassword";
import { useNavigate } from "react-router-dom";

const UpdatePassword = ({onClose, pivotbander, email}) => {
  const navigate = useNavigate()
  console.log(email);
  const accessToken = useSelector((state) => state.accessToken);
  const infouser = useSelector((state) => state.user)
  const id = infouser.id
  const dispatch = useDispatch()
  const [error, setError] = useState({
    errorPasscurrent: "",
    errorPassNew: ""
  });
  console.log(error);
  const [updatePassword, setUpdatePassword] = useState({
    password: "",
    newPassword: "",
    passwordNueva2: "",
  });
  useEffect(() => {
    if (updatePassword.newPassword === updatePassword.passwordNueva2) {
      setError({
        ...error,
        newPassword: ""
      });
    }
    validate()
  }, [updatePassword.passwordNueva2, updatePassword.password])
  const handleChangePasswordActual = (event) => {
    const { value } = event.target;
    setUpdatePassword({
      ...updatePassword,
      password: value,
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
    const errorpass = {
      error1: "",
      error2: ""
    }
    if (updatePassword.newPassword !== updatePassword.passwordNueva2) {
      errorpass.error1 = "Las contraseñas no coinciden"
    }
    if (updatePassword.password === "") {
      errorpass.error2 = "Tienes que colocar tu contraseña actual"
    } else {
      errorpass.error2 = ""
    }
    setError({
      ...error,
      errorPasscurrent: errorpass.error2,
      errorPassNew: errorpass.error1
    })
  };
  const handleSumit = async() => {
    if(typeof pivotbander === "number" && email !== ""){
      const response = await resetPassword(email, updatePassword.newPassword)
      if (response.success === true) {
        console.log(response.success);
        message.success("Nueva contraseña actualizada")
        navigate("/")
        setUpdatePassword({})
      }else{
        message.error("Error al editar la contraseña");
      }

    }else if (error.errorPassNew === "" && error.errorPasscurrent === "") {
      const { password, newPassword } = updatePassword
      const 
      response = await dispatch(updateUser({ password, newPassword, id }, accessToken))
      if (response.message === "Usuario editado correctamente") {
        message.success(response.message);
        setUpdatePassword({})
        onClose();
      }else{
        message.error("Error al editar la cuenta");
      }
    }
  }

  return (
    <div>
      {
        typeof pivotbander === "number" ? "" :
      <div className={style.containerInput}>
        
        <Input
          placeholder="Contraseña Actual*"
          autoComplete="off"
          onChange={handleChangePasswordActual}
          value={updatePassword.password}
        />
        {error.errorPasscurrent && <p className={style.error}>{error.errorPasscurrent}</p>}

      </div>
      }
      <Divider orientation="left">Ingrese la nueva contraseña</Divider>
      <Input
        placeholder="Contraseña Nueva*"
        autoComplete="off"
        name="newPassword"
        type="password"
        onChange={handleChangePasswordNew}
        value={updatePassword.newPassword}
      />
      <Divider orientation="left">Ingrese nuevamente la contraseña</Divider>
      <div className={style.containerInput}>
        <Input
          placeholder="Contraseña Nueva*"
          autoComplete="off"
          name="passwordNueva2"
          type="password"
          onChange={handleChangePasswordNew}
          value={updatePassword.passwordNueva2}
        />
        {error.errorPassNew && <p className={style.error}>{error.errorPassNew}</p>}
      </div>
      <div className={style.btnSubmit}>
        <ButtonPrimary title="Actualizar" onClick={handleSumit} />
      </div>
    </div>
  );
};

export default UpdatePassword;

