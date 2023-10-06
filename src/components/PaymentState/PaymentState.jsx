import { useEffect, useState } from "react";

const PaymentState = () => {
  const userId = useState((state) => state.userId);
  const cart = useState((state) => state.cart);
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get("data");
  const parsedData = JSON.parse(decodeURIComponent(data));
  console.log(parsedData);
  useEffect(() => {
    if (parsedData.status === "approved") {
      const paymentApproved = async () => {
        if (userId.length) {
          //despachar /purchase/add userId y products
          //despachar limpiar el carrito
        }
      };
    }
  }, []);

  return <div></div>;
};

export default PaymentState;
