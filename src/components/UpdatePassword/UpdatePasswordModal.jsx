
import { Modal } from "antd";
import UpdatePassword from "../UpdatePassword/UpdatePassword";

const UpdatePasswordModal = ({ visible, onClose, pivotbander, email }) => {
 
  return (
      <Modal
      title="Actualizar Contraseña"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <UpdatePassword onClose={onClose} pivotbander={pivotbander} email={email}/>
    </Modal>
    
  );
};

export default UpdatePasswordModal;