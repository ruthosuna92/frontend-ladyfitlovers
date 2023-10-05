import React, { useState } from 'react';
import { Button, Drawer, Space, Card, Row, Col, Image} from 'antd';


const DrawerCart = ({openDrawer, onClose}) => {
  const [open, setOpen] = useState(openDrawer);
  const showDefaultDrawer = () => {
    setOpen(openDrawer);
  };
  const style = {
    padding: '8px 0',
    width: 20,
    height: 20
  };
  // const onClose = () => {
  //   setOpen(false);
  // };
  const shopping = {name: 'REMERA DUAL POWER', price: 30600, image: 'https://d22fxaf9t8d39k.cloudfront.net/2b6380e52e692f4af4c3a40493c8e6b0d185cd370cf6c2c93b00277d9325404d205310.jpg', color: 'red', size: 's', quantity: 3}
  console.log(shopping.image);
  return (
    <>
      <Drawer
        //title={`${size} Drawer`}
        placement="right"
        size="large"
        onClose={() => onClose(false)}
        open={open}
        // extra={
        // }
      > <Card
      bordered={false}
      hoverable={true}
      style={{
        width: 655,
        height:150,
        margin:20,
        
      }}
    >
  
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>{shopping.name}</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image alt={shopping.name} src={shopping.image && shopping.image} width={35} /></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Cant.<br></br>{shopping.quantity}</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Total<br></br>{shopping.price}</div>
      </Col>
    </Row>
    </Card>
    <div>Costo total<br></br>suma total</div>
          <Space>
            <Button onClick={() => onClose(false)}>Ver carrito</Button>
            <Button type="primary" onClick={() => onClose(false)}>
              Ir a pagar
            </Button>
          </Space>
      </Drawer>
    </>
  );
};
export default DrawerCart;