import { Form, Input, Space, Radio, Card, Button, Select } from 'antd';
import { useEffect, useState } from 'react';
import { provincias } from '../../CreateAcountModal/Provincias';
import { useDispatch, useSelector } from 'react-redux';
import amount from './shipping';
import shippingType from '../../../redux/Actions/Checkout/shippingType';
import shippingCost from '../../../redux/Actions/Checkout/shippingCost';
import checkout from '../../../redux/Actions/Checkout/checkout';




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
    provincia: null
  })
  const [editing, setEditing] = useState(false)
  const user = useSelector((state) => state.user)
  const cart = useSelector((state)=> state.cart)
  const typeSelected = useSelector((state) => state.shippingType)
  const costSelected = useSelector((state) => state.shippingCost)
  const total = cart.map((prod) => prod.price * prod.quantity).reduce((acc, cur) => acc + cur, 0)

  useEffect(()=>{
    dispatch(shippingType(shipping))
    dispatch(shippingCost(amount(shipping)))
  },[shipping])
  const handleRadio = (event) => {
    setShipping(event.target.value)
    console.log(event.target.value);
    console.log(event);
  }
  const handleChange = (value) => {
    setItem({
      ...item,
      provincia: value
    })
    console.log(`selected ${value}`);
  };
  console.log(item.provincia);
  console.log(user);
  const handleForm = (event) => {
    const {name, value} = event.target
  setItem({
    ...item,
    [name]: value
  })

}
const handleEdit = (event) => {
  setEditing(true)
}
const handleUpdate = () => {
  console.log("updated");
//  setEditing(false)
}
const handleCheckout = () => {
  dispatch(checkout(cart, costSelected))
}
console.log(item);
  const address = `${item.calle} ${item.numero} ${item.dpto}, entre: ${item.entreCalles}, ${item.localidad} - CP: ${item.codigoPostal}, ${item.provincia}`;
console.log(address);
console.log(user.address);

console.log(typeSelected);
console.log(costSelected);
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
       {shipping === "Envío a domicilio" && user.address && !editing && <Card
          style={{
            width: 600,
            height: 200,
            margin: 20
          }}
        >
          <p>{user.address}</p>
          <Button type='primary' onClick={handleEdit}>edit</Button>

        </Card>} 
        {shipping === "Envío a domicilio" && (!user.address || editing) && <Card
          style={{
            width: 600,
            height: 320,
            margin: 20
          }}
        >
          <Form onChange={handleForm} onClick={handleUpdate}>
            <span>Ingrese dirección</span>
            <Form.Item
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="Calle"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: 'inline-block',
                  width: 'calc(33% - 8px)',
                }}
              >
                <Input placeholder="Calle*" name='calle'/>
              </Form.Item>
              <Form.Item
                name="Número"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: 'inline-block',
                  width: 'calc(33% - 8px)',
                  margin: '0 8px',
                }}
              >
                <Input placeholder="Número*" name='numero'/>
              </Form.Item>
              <Form.Item
                name="Dpto"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: 'inline-block',
                  width: 'calc(33% - 8px)',
                }}
              >
                <Input placeholder="Dpto*" name='dpto'/>
              </Form.Item>
            </Form.Item>
            <Form.Item
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="Entre calles"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: 'inline-block',
                  width: 'calc(100% - 8px)',
                }}
              >
                <Input placeholder="Entre calles*" name='entreCalles'/>
              </Form.Item>
            </Form.Item>
            <Form.Item
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="Localidad"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                }}
              >
                <Input placeholder="Localidad*" name='localidad' />
              </Form.Item>
              <Form.Item
                name="Código postal"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  margin: '0 8px',
                  marginBottom: 10
                }}
              >
                <Input placeholder="Código Postal*" name='codigoPostal'/>
              </Form.Item>
              <Form.Item
                style={{
                  marginBottom: 0
                }}
              >
                <Select
                  style={{
                    display: 'inline-block',
                    width: 'calc(100% - 8px)',
                    margin: '0 8px',
                  }}
                  defaultValue="Seleccione una provincia"
                  onChange={handleChange}
                  options={provincias}
                />
              </Form.Item>
            </Form.Item>

            <Form.Item label=" " colon={false}>
              <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
                Actualizar
              </Button>
            </Form.Item>

          </Form>
        </Card>}
        <Card
          style={{
            width: 600,
            height: 200,
            margin: 20
          }}
        >
          <p>Aquí muestro el total de productos</p>

        </Card>
      </Space>
      <Space direction='vertical' style={{
        display: 'flex',
        flexDirection: "column",
        margin: 40,
        alignItems: "center"
      }}>

        <Card
          title="Resumen de compra"
          bordered={false}

          style={{
            width: 500
          }}
        >
          <p>Subtotal       ${total}</p>
          <p>Envío ${costSelected}</p>
          <p>Total ${total + costSelected}</p>

        <Button type='primary' onClick={handleCheckout}>Ir a pagar</Button>
        </Card>
      </Space>
    </Space>
   
  </>
};
export default Checkout
