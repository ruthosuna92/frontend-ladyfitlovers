import style from "./ShoppingClient.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getOrdersByUser from "../../redux/Actions/Order/getOrdersByUser";
import { Card, Row, Col, Image } from 'antd';
import { getColorName } from "../../utils/getColorName";

const ShoppingClient = ({ products }) => {

 console.log(products);
  return (
    <div className={style.shoppingClientContainer}>
      
        {products?.map((userOrder) => (
          <div key={userOrder.id}>
            {
              <Card
                key={userOrder.id}
                bordered={false}
                hoverable={true}
                id={userOrder.id}
              >
                <Row justify="center">
                  <Col span={4}>
                    <div >Nombre<br /> {userOrder.name} </div>
                  </Col>
                  <Col span={4}>
                    <div><Image alt={userOrder.name} src={userOrder.image &&userOrder.image} width={35} /></div>
                  </Col>
                  <Col span={3}>
                    <div >Color<br />{getColorName(userOrder.color)}</div>
                  </Col>
                  <Col span={4} >
                    <div>Cant.<br />{userOrder.quantity}</div>
                  </Col>
                  <Col span={4}>
                    <div >Precio x unidad<br />${userOrder.price}</div>
                  </Col>
                  <Col span={3}>
                    <div >Total<br />${userOrder.price * userOrder.quantity}</div>
                  </Col>
                </Row>
              </Card>
            }
          </div>
        ))}
    </div>
  );
};

export default ShoppingClient;


