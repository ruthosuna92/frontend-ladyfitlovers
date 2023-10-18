import { Form, Input, Space, Radio, Card, Button, Select, Divider, Row ,Col, Image} from 'antd';
import { useEffect, useState } from 'react';
import { provincias } from '../../CreateAcountModal/Provincias';
import { useDispatch, useSelector } from 'react-redux';
import amount from './shipping';
import shippingType from '../../../redux/Actions/Checkout/shippingType';
import shippingCost from '../../../redux/Actions/Checkout/shippingCost';
import checkout from '../../../redux/Actions/Checkout/checkout';
import updateUser from '../../../redux/Actions/User/updateUser';
import { getColorName } from '../../../utils/getColorName';




const Checkout = () => {
  const dispatch = useDispatch()
  const [shipping, setShipping] = useState('Retiro en punto de entrega')
  const [item, setItem] = useState({
    calle: null,
    numero: null,
    dpto: null,
    entreCalles: null,
    localidad: null,
    codigoPostal: null,
    provincia: null,
    phone: null
  })
  const [editing, setEditing] = useState({
    address: false,
    phone: false
  })
  const [disabled, setDisable] = useState({
    address: true,
    phone: true
  })
  const user = useSelector((state) => state.user)
  const cart = useSelector((state)=> state.cart)
  const typeSelected = useSelector((state) => state.shippingType)
  const costSelected = useSelector((state) => state.shippingCost)
  const accessToken = useSelector((state) => state.accessToken)
  const total = cart.map((prod) => prod.price * prod.quantity).reduce((acc, cur) => acc + cur, 0)
  const [userUpdated, setUserUpdated] = useState({
    id: user.id,
    address: null,
    phone: null
  })
  useEffect(()=>{
    dispatch(shippingType(shipping))
    dispatch(shippingCost(amount(shipping)))
    if(user.address.calle && user.phone){
      let {calle, numero, dpto, entreCalles, localidad, codigoPostal, provincia} = user.address
      setItem({
        ...item,
        calle,
        numero,
        dpto,
        entreCalles,
        localidad,
        codigoPostal,
        provincia,
        phone: user.phone
      })
    }
    
  },[shipping, user])
  console.log(user.address.calle === "");
  console.log(user);
  const handleRadio = (event) => {
    setShipping(event.target.value)
  }
  const handleChange = (value) => {
    setItem({
      ...item,
      provincia: value
    })
  };
 
  const handleForm = (event) => {
    const {name, value} = event.target
  setItem({
    ...item,
    [name]: value
  })

}
const handleEdit = (event) => {
  const edit = event.target.innerText
  if(edit === "Editar dirección"){
    setEditing({
      ...editing,
      address: true
    })
  } else {
    setEditing({
      ...editing,
      phone: true
    })
  }
}
const handleUpdate = (event) => {
  const update = event.target.innerText
  if(update === "Actualizar dirección" && item.calle && item.numero && item.entreCalles && item.codigoPostal && item.localidad && item.provincia){
    setUserUpdated({
      ...userUpdated,
      address: {
        calle: item.calle,
        numero: item.numero,
        dpto: item.dpto,
        entreCalles: item.entreCalles,
        codigoPostal: item.codigoPostal,
        localidad: item.localidad,
        provincia: item.provincia
      }
    })
    dispatch(updateUser({id: userUpdated.id, address: userUpdated.address}, accessToken))
  }
  if( update === "Actualizar teléfono" && item.phone){
    setUserUpdated({
      ...userUpdated,
      phone: item.phone
    })
    dispatch(updateUser({id: userUpdated.id, phone: userUpdated.phone}, accessToken))
  }
  console.log(`updated ${event.target.innerText}`);
}
const handleCheckout = () => {
  dispatch(checkout(cart, costSelected))
}
console.log(item);
const {calle, numero, dpto, entreCalles, localidad, provincia, codigoPostal} = user.address
  

  
  return <>

    <Space
      direction="horizontal"
      size="middle"
      style={{
        display: 'flex',
        justifyContent: "space-around"
      }}
    >
  
      <Space direction='vertical' style={{
        display: 'flex',
        justifyContent: "space-around",
        flexDirection: "column",
        margin: 40
      }}>
        <h2>Escoge el tipo de entrega</h2>
        <Radio.Group style={{ margin: 20 }} onChange={handleRadio} defaultValue={"Retiro en punto de entrega"}>
          <Radio.Button style={{ width: 300 }} value="Retiro en punto de entrega">
            Retiro en punto de entrega
          </Radio.Button>
          <Radio.Button style={{ width: 300 }} value="Envío a domicilio">
            Envío a domicilio
          </Radio.Button>
        </Radio.Group>
        {shipping === "Retiro en punto de entrega" && <Card
          style={{
            width: 600,
            height: 200,
            margin: 20
          }}
        >
          <p>Aquí se renderiza opción Retiro en punto de entrega</p>

        </Card>}
       {shipping === "Envío a domicilio" && calle && !editing.address && <Card
          style={{
            width: 600,
            height: 200,
            margin: 20
          }}
        >
          <h3>Dirección de envío:</h3>
          <p>{`Calle ${calle} número ${numero} dpto ${dpto}, entre: ${entreCalles}, ${localidad} - CP: ${codigoPostal}, ${provincia}`}</p>
          <Button size='small' type='primary' onClick={handleEdit}>Editar dirección</Button>

        </Card>} 
        {shipping === "Envío a domicilio" && (!calle || editing.address) && <Card
          style={{
            width: 600,
            height: 320,
            margin: 20
          }}
        >
          <h3>Dirección de envío:</h3>
          <Form onChange={handleForm} onClick={handleUpdate}>
            <Form.Item
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="Calle"
                
                style={{
                  display: 'inline-block',
                  width: 'calc(33% - 8px)',
                }}
              >
                <Input placeholder="Calle*" name='calle' defaultValue={item.calle} value={item.calle}/>
              </Form.Item>
              <Form.Item
                name="Número"
               
                style={{
                  display: 'inline-block',
                  width: 'calc(33% - 8px)',
                  margin: '0 8px',
                }}
              >
                <Input placeholder="Número*" name='numero' defaultValue={item.numero} value={item.numero}/>
              </Form.Item>
              <Form.Item
                name="Dpto"
                
                style={{
                  display: 'inline-block',
                  width: 'calc(33% - 8px)',
                }}
              >
                <Input placeholder="Dpto*" name='dpto' defaultValue={item.dpto} value={item.dpto}/>
              </Form.Item>
            </Form.Item>
            <Form.Item
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="Entre calles"
                
                style={{
                  display: 'inline-block',
                  width: 'calc(100% - 8px)',
                }}
              >
                <Input placeholder="Entre calles*" name='entreCalles' defaultValue={item.entreCalles} value={item.entreCalles}/>
              </Form.Item>
            </Form.Item>
            <Form.Item
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="Localidad"
               
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                }}
              >
                <Input placeholder="Localidad*" name='localidad' defaultValue={item.localidad} value={item.localidad}/>
              </Form.Item>
              <Form.Item
                name="Código postal"
               
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  margin: '0 8px',
                  marginBottom: 10
                }}
              >
                <Input placeholder="Código Postal*" name='codigoPostal' defaultValue={item.codigoPostal} value={item.codigoPostal}/>
              </Form.Item>
              <Form.Item
                style={{
                  marginBottom: 0
                }}
                name="Provincia"
               
              >
                <Select
                  style={{
                    display: 'inline-block',
                    width: 'calc(100% - 8px)',
                    margin: '0 8px',
                  }}
                  defaultValue={"Seleccione una provincia"}
                  value={item.provincia}
                  onChange={handleChange}
                  options={provincias}
                />
              </Form.Item>
            </Form.Item>

            <Form.Item name="actualizar" label=" " colon={false} id="prueba">
              <Button size='small' disabled={disabled.address} name='actualizar' type="primary" htmlType="submit" style={{ marginTop: 10 }} id="prueba">
                Actualizar dirección
              </Button>
            </Form.Item>

          </Form>
        </Card>}
       {user.phone && !editing.phone && <Card
          style={{
            width: 600,
            height: 200,
            margin: 20
          }}
        >
          <h3>Número telefónico: </h3>
          <p>{user.phone}</p>
          <Button size='small' style={{marginTop: 10}} name='editPhone' type='primary' onClick={handleEdit}>Editar teléfono</Button>

        </Card>}
        {(editing.phone || !user.phone) && <Card
          style={{
            width: 600,
            height: 200,
            margin: 20
          }}
        >
          <h3>Número telefónico: </h3>
          <Form onChange={handleForm} onClick={handleUpdate}>
          <Form.Item
                style={{
                  marginBottom: 0
                }}
              >
                 <Input placeholder="Número telefónico" name='phone' defaultValue={item.phone}/>
              </Form.Item>
            </Form>
    
          <Button disabled={disabled.phone} size='small' name='editPhone' type='primary' style={{marginTop: 10}} onClick={handleEdit}>Actualizar teléfono</Button>

        </Card>}
      </Space>
      <Space direction='vertical' style={{
        display: 'flex',
        flexDirection: "column",
        margin: 40,
        alignItems: "center"
      }}>

{/* card de la derecha */}

<Card
  title="Resumen de compra"
  bordered={false}
  style={{width: 655}}
    >

{cart.length > 0 && cart.map(({ name, color, image, size, quantity, price, id }, i) => {
  return (
    <div key={id}>
      <Card
        // className={styles.productShow}
        title={name}
        bordered={false}
        hoverable={true}
        style={{
          width: 450,

          margin: 15,
        }}
        id={id}
        name={size}
        // cover={
        //   <img
        //     alt="example"
        //     src={image}
        //     style={{
        //       objectFit: "cover",
        //       maxWidth: "50px",
        //       maxHeight: "50px",
        //     }}
        //   />
        // }
      >
        <Row justify="center">
        <Divider type="vertical" style={{ color: "white" }} />
          <Col>
            <div><Image alt={name} src={image && image} width={35} /></div>
          </Col>
          <Divider type="vertical" />
          <Col>
            <div>Color<br />{getColorName(color)}</div>
          </Col>
          <Divider type="vertical" />
          <Col>
            <div>Cant.<br />{quantity}</div>
          </Col>
          <Divider type="vertical" />
          <Col>
            <div>Precio x unidad<br />{price}</div>
          </Col>
          <Divider type="vertical" />
          <Col>
            <div>Total<br />{price * quantity}</div>
          </Col>
          <Divider type="vertical" />
        </Row>
        
      </Card>
    </div>
  );
})}

        

          <Divider />
          <p>Subtotal       ${total}</p>
          <p>Envío ${costSelected}</p>
          <Divider />
          <p>Total ${total + costSelected}</p>

        <Button type='primary' disabled={editing.address || editing.phone || !calle || !numero || !dpto || !entreCalles || !localidad || !provincia || !codigoPostal || !user.phone} onClick={handleCheckout}>Ir a pagar</Button>
  </Card>
      </Space>
    </Space>
   
  </>
};
export default Checkout
