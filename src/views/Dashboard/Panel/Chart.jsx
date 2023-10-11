import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  LineElement,
  Legend,
} from "chart.js";

ChartJS.register(
    ArcElement,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import "./Chart.css";
import { useSelector } from "react-redux";

const Chart = ({ months }) => {
  const allProducts = useSelector((state) => state.allProducts);
  const allCategories = useSelector((state) => state.allCategories);
//   const allOrders = useSelector((state) => state.allOrders);    

//   const productsByCategory = allCategories.map((category) => {
//     {
//       return {
//         name: category.name,
//         quantitySold: allProducts
//           .filter((product) => product.Category.id === category.id)
//           .reduce((acc, product) => acc + product.unitsSold, 0),
//       };
//     }
//   });

  const monthsSales = months.map((month) =>
    month.sales.reduce((acc, order) => acc + Number(order.totalAmount), 0)
  );
  const monthsOrders = months.map((month) => month.sales.length);

//   const mostSales = allProducts
//     .sort((a, b) => b.unitsSold - a.unitsSold)
//     .slice(0, 5);

  

  const data = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Venta en $",
        backgroundColor: "rgba(186, 51, 138, 1)",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 2,
        data: monthsSales,
      },
    ],
  };

  const data2 = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],

    datasets: [
      {
        label: "Cantidad de ordenes",
        tension: 0.3,
        fill: true,

        backgroundColor: "rgba(186, 51, 138, 1)",
        borderColor: "rgba(224, 179, 211,1)",
        pointRadius: 5,
        borderWidth: 2,
        data: monthsOrders,
      },
    ],
  };

//   const data3 = {
//     labels: [allCategories.map((category) => category.name)],

//     datasets: [
//       {
//         label: "Productos más vendidos",
//         backgroundColor: "rgba(186, 51, 138, 1)",
//         backgroundColor: "rgba(181, 51,43, 1)",
//         borderColor: "rgba(224, 179, 211,1)",
//         borderWidth: 1,
//         data: productsByCategory.map((category) => category.quantitySold),
//       },
//     ],
//   };

  const options = {
    maintainsAspectRatio: false,
    responsive: true,
  };

  return (
    <>
    <div className="chartContainer">
      <div className="chart">
        <Bar data={data} options={options} />
      </div>
      <div className="chart">
        <Line data={data2} options={options} />
      </div>
    </div>
      {/* <div className="charContainer2" style={{height: 600}} >

        <Pie data={data3} options={options} />
      </div> */}
    </>
  );
};

export default Chart;
