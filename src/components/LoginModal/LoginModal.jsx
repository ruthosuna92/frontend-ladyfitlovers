import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//action
import loginUser from "../../redux/Actions/User/loginUser";
import userById from "../../redux/Actions/User/getUserById";
//imports
import { Modal, Form, Input, Button, Checkbox, Divider, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";
import "./loginModal.css";
import ButtonTertiary from "../ButtonTertiary/ButtonTertiary";
import getCart from "../../redux/Actions/ShoppingCart/getCart";

//Enviar a una variable de entorno!!!!!!!!!!!!!!!!!!!!!!!!!!!
const clientId =
  "521123783257-d2stfpejph6ok0djqqpm8e396dsg10c5.apps.googleusercontent.com";

const LoginModal = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.cart);
  // auth google

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleLogin = async () => {
    try {
      const values = await form.validateFields();
      const { email, password } = values;
      setLoading(true);
      const response = await dispatch(loginUser(email.toLowerCase(), password));
      const user = await dispatch(
        userById(response.payload.idUser, response.payload.token)
      ); //idUser es lo que devuelve el loginser del back.

      if (user) {
        setLoading(false);
        return props.onClose();
      }
    } catch (error) {
      setLoading(false);
      message.error("Email o contraseña incorrectos");
    }
  };
  const handleGoogleLoginSuccess = () => {
    props.onClose();
  };

  return (
    <Modal
      title="Ingresar"
      visible={props.visible}
      onCancel={props.onClose}
      footer={null}
    >
      <br />
      <Form form={form} onFinish={handleLogin} className="login-form">
        <Divider orientation="left" style="">
          E-mail
        </Divider>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Ingrese un Email" },
            {
              type: "email",
              message: "El correo electrónico no es válido",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Ingrese una contraseña" },
            {
              min: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Ingresar
          </Button>
          O
          <ButtonTertiary
            title="Registrarme"
            type="button"
            onClick={() => {
              props.onClose();
              props.setCreateAcountModalVisible(true);
            }}
          />
        </Form.Item>
        <Link to="/recuperar-contrasena">
          <p style={{ color: "#BA338A", fontSize: "0.7rem" }}>
            ¿Has olvidado tu contraseña?
          </p>
        </Link>
        <Divider orientation="left" style="">
          Google
        </Divider>
        <Form.Item>
          <GoogleAuth onGoogleLoginSuccess={handleGoogleLoginSuccess} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;

// const handleLogin = async () => {
//   try {
//     const values = await form.validateFields();
//     const { email, password } = values;

//     setLoading(true);

//     dispatch(loginUser(email, password))
//       .then(() => {
//         dispatch(userById()).then(() => {
//           setLoading(false);
//           props.onClose();
//         });
//       })
//       .catch((error) => {
//         console.error("Login failed:", error);
//         setLoading(false);
//       });
//   } catch (error) {
//     console.error("Validation failed:", error);
//   }
// };

// const handleLogin = async () => {
//   try {
//     const values = await form.validateFields();
//     const { email, password } = values;
//     console.log(email, password);
//     // Dispatch loginUser action
//     dispatch(loginUser(email, password)).then((response) => {
//       console.log("Server response:", response.data);
//       // Check if the login was successful and idUser is available
//       if (response && response.idUser) {
//         // Dispatch getUserById action with the obtained idUser
//         dispatch(userById(response.idUser));
//         console.log(response.idUser);
//         // Close the modal if needed
//         props.onClose();
//       } else {
//         console.error("Login failed or id is missing.");
//       }
//     });
//   } catch (error) {
//     console.error("Validation failed:", error);
//   }
// };
