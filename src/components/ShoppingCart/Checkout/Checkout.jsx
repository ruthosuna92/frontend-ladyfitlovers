import { Form, Input, Space, Radio, Card, Button, Select } from 'antd';
import { useState } from 'react';
import { provincias } from '../../CreateAcountModal/Provincias';
import { useSelector } from 'react-redux';


const Checkout = () => {
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
  const user = useSelector((state) => state.user)
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
  setItem({
    ...item,
    [event.target.name]: event.target.value
  })
  console.log(event);
  console.log(event.target.name);// el que necesito para los nombres de las props
  console.log(event.target.id);
  console.log(event.target.value);
}
console.log(item);
  const address = `${item.calle} ${item.numero} ${item.dpto}, entre: ${item.entreCalles}, ${item.localidad} - CP: ${item.codigoPostal}, ${item.provincia}`;
console.log(address);
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
       {shipping === "Envío a domicilio" && user.address && <Card
          style={{
            width: 600,
            height: 200,
            margin: 20
          }}
        >
          <p>Aquí se renderiza la dirección cuando el cliente tiene una</p>

        </Card>} 
        {shipping === "Envío a domicilio" && <Card
          style={{
            width: 600,
            height: 320,
            margin: 20
          }}
        >
          <Form onChange={handleForm}>
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
          title="Card title"
          bordered={false}

          style={{
            width: 500
          }}
        >
          <p>Resumen del pago</p>

        </Card>
        <Button type='primary' >Ir a pagar</Button>
      </Space>
    </Space>
   
  </>
};
export default Checkout
