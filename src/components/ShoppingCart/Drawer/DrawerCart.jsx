import React, { useState, useEffect } from 'react';
import { Button, Drawer, Space, Card, Row, Col, Image, message} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import decrementQuantity from '../../../redux/Actions/ShoppingCart/decrementQuantity';
import incrementQuantity from '../../../redux/Actions/ShoppingCart/incrementQuantity';
import style from "./DrawerCart.module.css"
import { getColorName } from '../../../utils/getColorName';
import axios from 'axios';
const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;


const DrawerCart = ({openDrawer, onClose}) => {
  const allProductsAdmin = useSelector((state) => state.allProductsAdmin)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  
  const [messageApi, contextHolder] = message.useMessage()
 
  const [open, setOpen] = useState(openDrawer);
  const showDefaultDrawer = () => {
    setOpen(openDrawer);
  };
  const style = {
    padding: '8px 0',
    width: 20,
    height: 20
  };

  const prices = cart.map((prod) => prod.price)
  
  const total = cart.map((prod) => prod.price * prod.quantity).reduce((acc, cur) => acc + cur, 0)
  

  const handleCard = (e) => {
    console.log(e.target.outerText);
    if(e.target.outerText !== "Ir a pagar"){
      if(e.target.localName === "span" ){
  
        const id = e.nativeEvent.srcElement.parentElement.offsetParent.offsetParent.id
        let colorSelected = cart[e.target.offsetParent.id].color
        let sizeSelected = e.target.offsetParent.name
        let indexCart = e.target.offsetParent.id
        const top = allProductsAdmin.find((p) => p.id === Number(id)).stock.find((col) => col.color === colorSelected).sizeAndQuantity.find((siz) => siz.size === sizeSelected).quantity
        if(e.target.innerText === "-"){
            dispatch(decrementQuantity(indexCart))
        }
        if(e.target.innerText === "+"){
          dispatch(incrementQuantity(indexCart, top))
        }
        
      }
      if(e.target.localName === "button"){
        const id = e.nativeEvent.srcElement.parentElement.offsetParent.offsetParent.id
        let colorSelected = cart[e.target.id].color
        let sizeSelected = e.target.name
        let indexCart = e.target.id
        
        const top = allProductsAdmin.find((p) => p.id === Number(id)).stock.find((col) => col.color === colorSelected).sizeAndQuantity.find((siz) => siz.size === sizeSelected).quantity
        
        if(e.target.innerText === "-"){
          dispatch(decrementQuantity(indexCart))
      }
        if(e.target.innerText === "+"){
          dispatch(incrementQuantity(indexCart, top)) 
        }
        
      }
    }
  }
  
  const handleBuy = async () => {
    console.log('el boton no es el problema');
    try {
      
      const { data } = await axios.post(`${API_URL_BASE}/payment/createOrder`, { products: cart })
      window.location.href = data.response.init_point;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    {contextHolder}
      <Drawer
        title="Carrito de compras"
        placement="right"
        size="large"
        onClose={() => onClose(false)}
        open={open}
        onClick={(e) => handleCard(e)}
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
      id={id}
      name={size}
    >
    <Row justify="center">
      <Col span={4}>
        <div >Nombre<br></br> {name} </div>
      </Col>
      <Col span={4}>
        <div><Image alt={name} src={image && image} width={35} /></div>
      </Col>
      <Col span={3}>
        <div >Color<br></br>{getColorName(color)}</div>
      </Col>
      <Col span={4} >
        <div className={style.algo}>Cant.<br></br><Button style={{backgroundColor: "#e0b3cd", color: "black"}} size='small' className={i} id={i} type='secondary' name={size}  shape="circle" >{"-"}</Button>      { quantity } <Button style={{backgroundColor: "#e0b3cd", color: "black"}} size='small' className={i} id={i} type='secondary' name={size}  shape="circle" >{"+"}</Button></div>
      </Col>
      <Col span={4}>
        <div >Precio x unidad<br></br>{price}</div>
      </Col>
      <Col span={3}>
        <div >Total<br></br>{price * quantity}</div>
      </Col>
    </Row>
    </Card>
        </div>
      })}
    <div>Costo total<br></br>{total}</div>
          <Space>
            <Button onClick={() => onClose(false)}>Seguir comprando</Button>
            <Button type="primary" onClick={() => handleBuy()}> 
            {/* // /payment/createOrder   window.location.href = response.data.response.body.init_point; */}
              Ir a pagar
            </Button>
          </Space>
      </Drawer>
    </>
  );
};
export default DrawerCart;



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
