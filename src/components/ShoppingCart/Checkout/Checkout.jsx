import { Button, Modal, message, Steps, theme } from 'antd';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginModal from '../../LoginModal/LoginModal';

const Checkout = ({openCheckout, onCloseCheckout}) => {
 
  const steps = [
    {
      title: 'Iniciar sesión',
      content: 'First-content',
    },
    {
      title: 'Confirmar datos',
      content: 'Second-content',
    },
    {
      title: 'Resumen de compra',
      content: 'Last-content',
    },
  ];
    const user = useSelector((state)=> state.user)
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [createAcountModalVisible, setCreateAcountModalVisible] =
    useState(false);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    useEffect(()=>{
        if(user.email){
            setCurrent(1)
        } else {
            setLoginModalVisible(true)
        }
    },[user.email])
    const contentStyle = {
      lineHeight: '400px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };
  return (
    <>
     
      <Modal title="Basic Modal" width={900} open={openCheckout} onOk={() => onCloseCheckout(false)} onCancel={() => onCloseCheckout(false)}>
    <>
      <Steps current={current} items={items} />
      {current === 0 && 
      <div style={contentStyle}> <LoginModal
        visible={loginModalVisible}
        onClose={() => setLoginModalVisible(false)}
        setCreateAcountModalVisible={setCreateAcountModalVisible}
      /> </div>}
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
      </Modal>
    </>
  );
};
export default Checkout