import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMonthSales } from "../../../utils/getMothSales";
import getAllOrders from "../../../redux/Actions/Order/getOrders";
import Resumen from "./Resumen";
import Chart from "./Chart";



const Panel = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);
  const accessToken = useSelector((state) => state.accessToken);


  const months = [
    { name: "Enero", sales: getMonthSales(allOrders, 0) },
    { name: "Febrero", sales: getMonthSales(allOrders, 1) },
    { name: "Marzo", sales: getMonthSales(allOrders, 2) },
    { name: "Abril", sales: getMonthSales(allOrders, 3) },
    { name: "Mayo", sales: getMonthSales(allOrders, 4) },
    { name: "Junio", sales: getMonthSales(allOrders, 5) },
    { name: "Julio", sales: getMonthSales(allOrders, 6) },
    { name: "Agosto", sales: getMonthSales(allOrders, 7) },
    { name: "Septiembre", sales: getMonthSales(allOrders, 8) },
    { name: "Octubre", sales: getMonthSales(allOrders, 9) },
    { name: "Noviembre", sales: getMonthSales(allOrders, 10) },
    { name: "Diciembre", sales: getMonthSales(allOrders, 11) },
  ];

  useEffect(() => {
    dispatch(getAllOrders(accessToken));
  }, []);

  return (
    <div>
        <Resumen allOrders={allOrders}/>
        <Chart months={months} allOrders={allOrders}/>

      {/* <h1>Ventas por mes</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {months?.map((month) => (
          <div style={{ width: "50%" }}>
            <h2>
              {month.name}: {month.sales.length}
            </h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Panel;
