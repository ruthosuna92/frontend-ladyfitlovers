import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Result, Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import postOrder from "../../redux/Actions/Order/postOrder";
import cleanCart from "../../redux/Actions/ShoppingCart/cleanCart";
import { NavLink } from "react-router-dom";

const PaymentState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userId = useSelector((state) => state.user.id);
  const products = useSelector((state) => state.cart);
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get("data");
  const parsedData = JSON.parse(decodeURIComponent(data));
  const totalAmount = products
    .map((prod) => prod.price * prod.quantity)
    .reduce((acc, cur) => acc + cur, 0);
  const mpId = parsedData?.payment_id;
  const accessToken = useSelector((state) => state.accessToken);

  const shippingCost = useSelector((state) => state.shippingCost);
  const shippingType = useSelector((state) => state.shippingType);
  // const shippingCost = 1;
  // const shippingType= "Envío a domicilio"

  useEffect(() => {
    if (parsedData.status === "approved") {
      const paymentApproved = async () => {
        if (userId) {
          const response = await dispatch(
            postOrder({
              userId,
              products,
              mpId,
              totalAmount,
              shippingCost,
              shippingType,
              accessToken,
            })
          );
          if (response.message === "Compra realizada correctamente") {
            console.log("Order added");
            dispatch(cleanCart({ userId, accessToken }));
          }
        }
      };
      paymentApproved();
    }
  }, []);

  const renderSuccessCard = () => (
    <Card>
      <Result
        status="success"
        title="Compra realizada con éxito!"
        subTitle="Su compra ha sido aprobada y procesada correctamente."
        extra={[
          <Button
            type="primary"
            key="profile"
            onClick={() => navigate("/perfil/compras")}
          >
            <ShoppingOutlined /> Ir al detalle de compra
          </Button>,
          <Button type="default" key="home" onClick={() => history.push("/")}>
            Volver al inicio
          </Button>,
        ]}
      />
    </Card>
  );

  const renderErrorCard = () => (
    <Card>
      <Result
        status="error"
        title="Error en la compra"
        subTitle="Hubo un problema con su compra. Por favor, intente nuevamente más tarde."
        extra={[
          <Button type="default" key="home" onClick={() => navigate("/")}>
            Volver al inicio
          </Button>,
        ]}
      />
    </Card>
  );

  return parsedData.status === "approved"
    ? renderSuccessCard()
    : renderErrorCard();
};

export default PaymentState;
