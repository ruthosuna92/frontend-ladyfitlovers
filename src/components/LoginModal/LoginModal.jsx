import React from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./LoginModal.css";

const LoginModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const [form] = Form.useForm();

  return (
    <Modal
      title="Ingresar"
      visible={props.visible}
      onCancel={props.onClose}
      footer={null}
    >
      <br></br>
      <Form form={form} onFinish={handleSubmit} className="login-form">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Ingrese un usuario" }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Usuario"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Ingrese una contraseña" }]}
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

          <a className="login-form-forgot" href="">
            Olvidé mi contraseña
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Ingresar
          </Button>
          Or <a href="">Registrarme!</a>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
