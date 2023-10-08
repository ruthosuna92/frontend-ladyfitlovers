import React from 'react'
import {  Card, Row, Col, Image } from 'antd';
import { getColorName } from '../../../utils/getColorName';


const OrderExpandedRow = ({products}) => {
  return (

    <div>
        <h3>Productos</h3>
        <div>
            {products.map((product) => (
                  <Card
                  bordered={false}
                  hoverable={true}
                  style={{
                    width: "100%",
                    height:120,
                    margin:5,
                  }}
                  id={product.id}
                  name={product.size}
                >
                <Row justify="center">
                  <Col span={4}>
                    <div >Nombre<br></br> {product.name} </div>
                  </Col>
                  <Col span={4}>
                    <div><Image alt={product.name} src={product.image && product.image} width={35} /></div>
                  </Col>
                  <Col span={3}>
                    <div >Color<br></br>{getColorName(product.color)}</div>
                  </Col>
                  <Col span={4} >
                    <div>Cant.<br></br>{ product.quantity}</div>
                  </Col>
                  <Col span={4}>
                    <div >Precio x unidad<br></br>${product.price}</div>
                  </Col>
                  <Col span={3}>
                    <div >Total<br></br>${product.price * product.quantity}</div>
                  </Col>
                </Row>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default OrderExpandedRow