// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// //actions
// import postOrder from "../../redux/Actions/Order/postOrder";
// import cleanCart from "../../redux/Actions/ShoppingCart/cleanCart";
// import { NavLink } from "react-router-dom";

// //antd
// import { ShoppingOutlined } from "@ant-design/icons";
// import { Card, Result, Button } from "antd";

// const PaymentState = () => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.user.id);
//   // console.log(userId);
//   const products = useSelector((state) => state.cart);
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);

//   // console.log(queryParams);

//   const data = queryParams.get("data");

//   // console.log(data);

//   const parsedData = JSON.parse(decodeURIComponent(data));
//   const totalAmount = products
//     .map((prod) => prod.price * prod.quantity)
//     .reduce((acc, cur) => acc + cur, 0);

//   const mpId = parsedData.payment_id;
//   // console.log(parsedData);

//   useEffect(() => {
//     // necesitamos despachar la orden al back primero
//     dispatch(cleanCart(userId));

//     if (parsedData.status === "approved") {
//       const paymentApproved = async () => {
//         if (userId) {
//           // una vez tenemos el success
//           // despachamos el envio de informacion como : payment status, order ID
//           //despachar /purchase/add userId y products list para agregar la compra a la lista de compras del usuario
//           console.log(userId, products, mpId, totalAmount);

//           const response = await dispatch(
//             postOrder({ userId, products, mpId, totalAmount })
//           );
//           if (response == 201) {
//             console.log("order added");
//             //despachar limpiar el carrito
//             dispatch(cleanCart(userId));
//           }
//         }
//       };
//       paymentApproved();
//     }
//     // }, [userId]);
//   }, []);

//   const renderSuccessCard = () => (
//     <Card>
//       <Result
//         status="success"
//         title="Compra realizada con éxito!"
//         subTitle="Su compra ha sido aprobada y procesada correctamente."
//         extra={[
//           <Button
//             type="primary"
//             key="profile"
//             onClick={() => history.push("/perfil/compras")}
//           >
//             <ShoppingOutlined /> Ir al detalle de compra
//           </Button>,
//           <Button type="default" key="home" onClick={() => history.push("/")}>
//             Volver al inicio
//           </Button>,
//         ]}
//       />
//     </Card>
//   );

//   const renderErrorCard = () => (
//     <Card>
//       <Result
//         status="error"
//         title="Error en la compra"
//         subTitle="Hubo un problema con su compra. Por favor, intente nuevamente más tarde."
//         extra={[
//           <Button type="default" key="home" onClick={() => history.push("/")}>
//             Volver al inicio
//           </Button>,
//         ]}
//       />
//     </Card>
//   );

//   return (
//     <div>
//       <Card>
//         {parsedData.status === "approved"}
//         <h2>Compra realizada con exito!</h2>
//         <NavLink to="/perfil/compras">
//           <ShoppingOutlined className="menuIcon" />
//           Ir al detalle de compra
//         </NavLink>
//         <p>testing</p>

//         <NavLink to="/">Volver al inicio</NavLink>
//       </Card>
//     </div>
//   );

//   // return parsedData.status === "approved" ? renderSuccessCard() : renderErrorCard();
// };

// export default PaymentState;

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
  const userId = useSelector((state) => state.user.id);
  const accessToken = useSelector((state) => state.accessToken);
  const products = useSelector((state) => state.cart);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  // console.log(queryParams);

  const data = queryParams.get("data");

  // console.log(data);

  const parsedData = JSON.parse(decodeURIComponent(data));
  const totalAmount = products.map((prod) => prod.price * prod.quantity).reduce((acc, cur) => acc + cur, 0)
  
  const mpId = parsedData.payment_id;
  // console.log(parsedData);

  useEffect(() => {
    // necesitamos despachar la orden al back primero
    dispatch(cleanCart(userId));

    if (parsedData.status === "approved") {
      const paymentApproved = async () => {
        if (userId) {
          // una vez tenemos el success
          // despachamos el envio de informacion como : payment status, order ID
          //despachar /purchase/add userId y products list para agregar la compra a la lista de compras del usuario
          console.log(userId, products, mpId, totalAmount);

          const response = await dispatch(
            postOrder({ userId, products, mpId, totalAmount, accessToken })
          );
          if (response ==201) {
            console.log("order added");
            //despachar limpiar el carrito
            dispatch(cleanCart(userId));
          }
        }
      };
      paymentApproved();
    }
  // }, [userId]);
  }, []);
  
  return (
    <div>
      <h2>Compra realizada con exito!</h2>
      <NavLink>Ir al detalle de compra</NavLink>
      <NavLink to="/">Volver al inicio</NavLink>
    </div>
  );
};

export default PaymentState;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import postOrder from "../../redux/Actions/Purchase/PostPurchase";

const PaymentState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userId = useSelector((state) => state.user.id);
  const products = useSelector((state) => state.cart);
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get("data");
  const parsedData = JSON.parse(decodeURIComponent(data));
  const totalAmount = products.reduce(
    (acc, prod) => acc + prod.price * prod.quantity,
    0
  );
  const mpId = parsedData?.payment_id;

  useEffect(() => {
    dispatch(cleanCart(userId));
    if (parsedData.status === "approved") {
      const paymentApproved = async () => {
        if (userId) {
          const response = await dispatch(
            postOrder({ userId, products, mpId, totalAmount })
          );
          if (response === 201) {
            console.log("Order added");
            dispatch(cleanCart(userId));
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


// const PaymentState = () => {
//   const navigate =useNavigate()
//   const renderSuccessCard = () => (
//     <Card>
//       <Result
//         status="success"
//         title="Compra realizada con éxito!"
//         subTitle="Su compra ha sido aprobada y procesada correctamente."
//         extra={[
//           <Button
//             type="primary"
//             key="profile"
//             onClick={() => navigate("/perfil/compras")}
//           >
//             <ShoppingOutlined /> Ir al detalle de compra
//           </Button>,
//           <Button type="default" key="home" onClick={() => navigate("/")}>
//             Volver al inicio
//           </Button>,
//         ]}
//       />
//     </Card>
//   );

//   const renderErrorCard = () => (
//     <Card>
//       <Result
//         status="error"
//         title="Error en la compra"
//         subTitle="Hubo un problema con su compra. Por favor, intente nuevamente más tarde."
//         extra={[
//           <Button
//             type="default"
//             key="home"
//             onClick={() => navigate("/")}
//           >
//             Volver al inicio
//           </Button>,
//         ]}
//       />
//     </Card>
//   );

//   return (
//     <div>
//       {renderSuccessCard()}
//       {renderErrorCard()}
//     </div>
//   );
// };