import React, { useState, useEffect } from "react";
import { Input, message } from "antd";
import style from "./CodeRequirer.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import verifyCode from "../../redux/Actions/User/verifyCode";
import { useNavigate, Outlet } from "react-router-dom";
import UpdatePasswordModal from "../../components/UpdatePassword/UpdatePasswordModal";
import { useSelector } from "react-redux";

const CodeRequirer = () => {
  const saveEmail = useSelector((state) => state.email);
  console.log(saveEmail);
  const navigate = useNavigate()
  const [ModalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState({
    code: 0,
    recovery: false
  });
  console.log(code);

  const handleCode = (event) => {
    setCode({
      ...code,
      code: event.target.value,
      recovery: true
    });
  };

  const handleCodeSumit = async () => {

    if (code.code.length === 6) {
      const response = await verifyCode(saveEmail, code.code);
      console.log(response);
      if (response.success === true) {


        setModalVisible(true);
      } else {
        message.error("Codigo incorrecto")

      }
    }


  }

  return (
    <div className={style.containerRecovery}>
      <div className={style.verifyEmail}>
        <div style={{ width: "90%", textAlign: "center" }}>
          <p style={{ fontSize: "1.2rem" }}>validación codigo</p>
          <p style={{ fontSize: "0.8rem" }}>
            Ingrese el codigo de verificación
          </p>
          <Input
            type="number"
            style={{ width: "80%", textAlign: "center" }}
            placeholder="codigo"
            maxLength={6}
            onChange={handleCode}
          />
        </div>
        <ButtonPrimary
          title="Continuar"
          disabled={code.code.length < 6}
          onClick={handleCodeSumit}
        />
      </div>
      <UpdatePasswordModal
        visible={ModalVisible}
        onClose={() => setModalVisible(false)}
        pivotbander={+code.code}
        email={saveEmail}
      />
      <Outlet />
    </div>
  );
};
export default CodeRequirer;