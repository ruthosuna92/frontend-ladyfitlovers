import React, { useState, useEffect } from "react";
import { Input } from "antd";
import style from "./RecoveryPassword.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import recoveryCode from "../../redux/Actions/User/recoveryCode";
import { Routes, Route, useLocation, useNavigate, Outlet } from "react-router-dom";

const RecoveryPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState({
    email: "",
    errorEmail: "",
    recovery: false
  });

  useEffect(() => {
    validate();
  }, [email.email]);

  const handleEmail = (event) => {
    setEmail({
      ...email,
      email: event.target.value
    });
  };

  const validate = () => {
    if (!email.email) {
      setEmail({
        ...email,
        errorEmail: "El email es obligatorio"
      });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.email)) {
      setEmail({
        ...email,
        errorEmail: "Ingrese un correo válido"
      });
    } else {
      setEmail({
        ...email,
        errorEmail: "",
        recovery: true
      });
    }
  };
  const handleSumit = async() => {
    try {
      if (email.errorEmail === ""){
        const response = await recoveryCode(email.email, email.recovery);
        console.log(response);
        if (response.success === true) {
          navigate("codigo-requerido")
        }
        setEmail({
          email: "",
          recovery: false
        })
      }
      
    } catch (error) {
      
    }
  }

  return (
    <div className={style.containerRecovery}>
      <div className={style.verifyEmail}>
        <div style={{ width: "90%", textAlign: "center" }}>
          <p style={{ fontSize: "1.2rem" }}>Recuperar contraseña</p>
          <p style={{ fontSize: "0.8rem" }}>
            Enviaremos un código a tu dirección de correo electrónico
          </p>
          <Input
            style={{ width: "80%" }}
            placeholder="Email"
            value={email.email}
            onChange={handleEmail}
          />
          {email.errorEmail && <p className={style.errorEmail}>{email.errorEmail}</p>}
        </div>
        <ButtonPrimary
          title="Enviar"
          disabled={email.errorEmail !== ""}
          onClick={handleSumit}
        />
      </div>
      <Outlet/>
    </div>
  );
};

export default RecoveryPassword;
