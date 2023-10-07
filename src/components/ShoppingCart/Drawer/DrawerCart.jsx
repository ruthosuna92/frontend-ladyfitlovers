import React, { useState, useEffect } from 'react';
import { Button, Drawer, Space, Card, Row, Col, Image} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import decrementQuantity from '../../../redux/Actions/ShoppingCart/decrementQuantity';
import style from "./DrawerCart.module.css"


const DrawerCart = ({openDrawer, onClose, /*saveCartLocal*/}) => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  console.log(openDrawer)
  useEffect(()=> {
   // saveCartLocal()
  }, [dispatch])
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
  const prices = cart.map((prod) => prod.price)
  
  const total = cart.map((prod) => prod.price).reduce((acc, cur) => acc + cur, 0)
  
  const handle = (a) => {
    console.log(a);
    console.log(a.target.offsetParent.id);
    dispatch(decrementQuantity(a.target.offsetParent.id))
    
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
        <div >Nombre<br></br> {name} </div>
      </Col>
      <Col span={4}>
        <div><Image alt={name} src={image && image} width={35} /></div>
      </Col>
      <Col span={3}>
        <div >Color<br></br>{color}</div>
      </Col>
      <Col span={4} >
        <div className={style.algo}>Cant.<br></br><Button style={{backgroundColor: "#e0b3cd", color: "black"}} size='small' className={i} id={i} type='secondary' name={name} onClick={handle}  shape="circle" >{"-"}</Button>      {quantity}      <Button style={{backgroundColor: "#e0b3cd", color: "black"}} size='small' className={i} id={i} type='secondary' name={name} onClick={handle} shape="circle" >{"+"}</Button></div>
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
            <Button onClick={() => onClose(false)}>Seguir comprando</Button>
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