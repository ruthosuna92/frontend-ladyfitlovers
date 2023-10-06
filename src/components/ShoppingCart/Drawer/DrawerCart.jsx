import React, { useState } from 'react';
import { Button, Drawer, Space, Card, Row, Col, Image} from 'antd';
import { useSelector } from 'react-redux';
import style from "./DrawerCart.module.css"


const DrawerCart = ({openDrawer, onClose}) => {
  const cart = useSelector((state) => state.cart)
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
  const total = cart.map((prod) => prod.price).reduce((acc, cur) => acc + cur, 0)
  console.log(total);
  const handle = (a) => {
    console.log(a);
    
  }
  return (
    <>
      <Drawer
        title="Carrito de compras"
        placement="right"
        size="large"
        onClose={() => onClose(false)}
        open={open}
        // extra={
        // }
      > 
      {cart.length > 0 && cart.map(({name, color, image, size, quantity, price, id}, i) => {
        return <div>

      <Card
      bordered={false}
      hoverable={true}
      style={{
        width: 655,
        height:120,
        margin:5,
      }}
    >
    <Row justify="center">
      <Col span={4}>
        <div >{name}</div>
      </Col>
      <Col span={4}>
        <div ><Image alt={name} src={image && image} width={35} /></div>
      </Col>
      <Col span={3}>
        <div >Color<br></br>{color}</div>
      </Col>
      <Col span={4} >
        <div className={style.algo}>Cant.<br></br><button  id={i} type='primary' name={name} onClick={handle}  shape="circle" >{"-"}</button>{quantity}<button type='primary' name={name} onClick={handle} shape="circle" >{"+"}</button></div>
      </Col>
      <Col span={4}>
        <div >Precio x unidad<br></br>{price / quantity}</div>
      </Col>
      <Col span={3}>
        <div >Total<br></br>{price}</div>
      </Col>
    </Row>
    </Card>
        </div>
      })}
    <div>Costo total<br></br>{total}</div>
          <Space>
            <Button onClick={() => onClose(false)}>Ver carrito</Button>
            <Button type="primary" onClick={() => onClose(false)}> 
            {/* // /payment/createOrder   window.location.href = response.data.response.body.init_point; */}
              Ir a pagar
            </Button>
          </Space>
      </Drawer>
    </>
  );
};
export default DrawerCart;

/*
const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
const createPreference = async () => {
  try {
    const response = await axios.post("/payment/createOrder", { products: cart });
    window.location.href = response.data.response.body.init_point;
  } catch (error) {
  lconsole.log(error.message)
  }
};
*/