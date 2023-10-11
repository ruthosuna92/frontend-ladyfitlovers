import updateUser from "../../redux/Actions/User/updateUser";
import { Input, Button, message, Select, Divider } from "antd";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useState } from "react";

const UpdatePassword = () => {
    const [UpdatePassword, setUpdatePassword] = useState({
        passwordActual: "",
        passwordNueva: "",
        passwordNueva2: "",
    });
    console.log(UpdatePassword);
    const handleChangePasswordActual = (value) => {
        setUpdatePassword({
            ...UpdatePassword,
            passwordActual: value,
        })
    }
    const handleChangePasswordNew = (name, value) => {
        setUpdatePassword({
            ...UpdatePassword,
            [name]: value,
        })
    }

    return (
        <div>
            <Input
                placeholder="Contraseña Actual*"
                autoComplete="off"
                onChange={handleChangePasswordActual}
            />
            <Divider orientation="left" style="">
                Ingrese la nueva contraseña
            </Divider>
            <Input
                placeholder="Contraseña Nueva*"
                autoComplete="off"
                name="passwordNueva"
                onChange={handleChangePasswordNew}
            />
             <Divider orientation="left" style="">
                Ingrese nuevamente la contraseña
            </Divider>
            <Input
                placeholder="Contraseña Nueva*"
                autoComplete="off"
                name="passwordNueva2"
                onChange={handleChangePasswordNew}
            />
            <br />
            <ButtonPrimary
            title="Actualizar"/>
        </div>
    )

};
export default UpdatePassword;