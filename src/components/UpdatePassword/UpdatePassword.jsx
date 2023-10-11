import React, { useState } from "react";
import { Input, Divider } from "antd";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const UpdatePassword = () => {
  const [error, setError] = useState("");
  const [updatePassword, setUpdatePassword] = useState({
    passwordActual: "",
    passwordNueva: "",
    passwordNueva2: "",
  });

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
    if (updatePassword.passwordNueva === updatePassword.passwordNueva2) {
      setError("");
    } else {
      setError("Las contraseñas nuevas no coinciden");
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Input
        placeholder="Contraseña Actual*"
        autoComplete="off"
        onChange={handleChangePasswordActual}
        value={updatePassword.passwordActual}
      />
      <Divider orientation="left">Ingrese la nueva contraseña</Divider>
      <Input
        placeholder="Contraseña Nueva*"
        autoComplete="off"
        name="passwordNueva"
        onChange={handleChangePasswordNew}
        value={updatePassword.passwordNueva}
      />
      <Divider orientation="left">Ingrese nuevamente la contraseña</Divider>
      <Input
        placeholder="Contraseña Nueva*"
        autoComplete="off"
        name="passwordNueva2"
        onChange={handleChangePasswordNew}
        value={updatePassword.passwordNueva2}
        onBlur={validate}
      />
      <br />
      <ButtonPrimary title="Actualizar" />
    </div>
  );
};

export default UpdatePassword;

