import { Collapse } from "antd";
import { Link } from "react-router-dom";
import LoginModal from "../../components/LoginModal/LoginModal";
import { useState } from "react";
import "./QandA.css";

const QandA = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const emailLink = () => {
    const email = "ladyfitlovers@gmail.com"

    return <a href={`mailto:${email}`}>ladyfitlovers@gmail.com</a>
  };

  const data = [
    {
      key: "1",
      label: "¿Tengo que registrarme para poder comprar?",
      children: [
        <p>
          Si, podés hacerlo{" "}
          <Link to="#" onClick={() => setLoginModalVisible(true)}>
            haciendo click aquí.
          </Link>
        </p>,
      ],
    },
    {
      key: "2",
      label: "¿Cómo comprar?",
      children: [
        <p>
          1° Mirá nuestros productos: Navegá el catálogo y buscá lo que más te
          gusta, podes refinar tu búsqueda con nuestros filtros de productos
          personalizados.
        </p>,
        <p>
          2° Agregá al carrito lo que más te guste: Seleccioná tus productos
          deseados y agregalos al carrito.
        </p>,
        <p>3° Pago: Elige la opcion de ir a pagar y realizas el pago.</p>,
      ],
    },
    {
      key: "3",
      label: "¿Cuáles son las opciones de pago disponibles?",
      children: [
        <p>Los medios de pagos disponibles por el momento son:</p>,
        <p>Mercado pago</p>,
      ],
    },
    {
      key: "4",
      label: "¿Cuál es el plazo de entrega?",
      children: [
        <p>
          Una vez generada la orden de compra las entregas se realizan dentro de
          los 10 días.
        </p>,
      ],
    },
    {
      key: "5",
      label: "¿Qué pasa si el producto llega roto y/o fallado?",
      children: [
        <p>
          Si el producto presenta una falla de fábrica podes contactarte vía
          mail a: {emailLink()} para poder ayudarte.
        </p>,
      ],
    },
  ];
  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      <div className="containerQA1">
      <div className="containerQA">
        <Collapse defaultActiveKey={["1"]} ghost items={data}/>;
      </div>
      <div className="containerQA2">
        <img alt= "preguntas" src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697483973/5219070_xs5tdt.jpg"></img>
      </div>
        </div>
      {loginModalVisible && (
        <LoginModal
          visible={loginModalVisible}
          onClose={() => setLoginModalVisible(false)}
        />
      )}
    </div>
  );
};

export default QandA;
