import style from "./ShoppingClient.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getOrders from "../../redux/Actions/Order/getOrders";
import { Card, Row, Col, Image } from 'antd';
import { getColorName } from "../../utils/getColorName";

const ShoppingClient = ({ idUser }) => {
  const ordersUser = useSelector((state) => state.allOrders);
  const [orderUser, setOrderUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    if (idUser) {
      const userOrders = ordersUser.filter((order) => order.UserId === idUser);
      setOrderUser(userOrders);
    }
  }, [idUser, ordersUser]);

  console.log(orderUser);

  return (
    <div className={style.shoppingClientContainer}>
      <div>
        {orderUser.map((userOrder) => (
          <div key={userOrder.id}>
            {userOrder.products.map((product) => (
              <Card
                key={product.id}
                bordered={false}
                hoverable={true}
                style={{
                  width: "100%",
                  height: 120,
                  margin: 5,
                }}
                id={product.id}
              >
                <Row justify="center">
                  <Col span={4}>
                    <div >Nombre<br /> {product.name} </div>
                  </Col>
                  <Col span={4}>
                    <div><Image alt={product.name} src={product.image && product.image} width={35} /></div>
                  </Col>
                  <Col span={3}>
                    <div >Color<br />{getColorName(product.color)}</div>
                  </Col>
                  <Col span={4} >
                    <div>Cant.<br />{product.quantity}</div>
                  </Col>
                  <Col span={4}>
                    <div >Precio x unidad<br />${product.price}</div>
                  </Col>
                  <Col span={3}>
                    <div >Total<br />${product.price * product.quantity}</div>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingClient;


