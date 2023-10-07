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
    console.log(a.target.localName === "span");
    console.log(a.target.localName === "button");
    console.log(a.target.offsetParent.id);
    console.log(a.target.id);
    
    if(a.target.innerText === "-"){
      if(a.target.localName === "span"){
        dispatch(decrementQuantity(a.target.offsetParent.id))
      } else {
        dispatch(decrementQuantity(a.target.id))
      }
    }
    
    
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


// const handleBuy = async () => {
//   try {
//     const { data } = await axios.post("/payment/createOrder", { products: cart, })
//     window.location.href = data.response.body.init_point;
//   } catch (error) {
//     console.log(error);
//   }
// };

// {
//   "userId": "c853ce97-99d1-401a-91ce-a7ec6d88dd37",
//   "products": [
//  {
// "id": 312,
// "name": "MUSCULOSA BODY",
// "image": "https://d22fxaf9t8d39k.cloudfront.net/e7932f7f83718e372db5316f598c872d4daacfd08d1e496e80a70112c821518a205310.jpg",
//     "price": 8400,
//     "color": "red",
//     "quantity": 6
// },
// {
// "id": 3,
// "name": "REMERA MANGA LARGA",
// "image": "https://d22fxaf9t8d39k.cloudfront.net/38e94b7bc0a1e5cdbc1c3523a0a138a1ca007735ba6eec97394a48f542c47469205310.jpg",
//     "price": 8500,
//     "color": "red",
//     "quantity": 2
// }
// ]
// }
