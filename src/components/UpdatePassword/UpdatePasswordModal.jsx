
import { Modal } from "antd";
import UpdatePassword from "../UpdatePassword/UpdatePassword";

const UpdatePasswordModal = ({ visible, onClose, pivotuser }) => {
  console.log(pivotuser);
 
  return (
      <Modal
      title="Actualizar Contraseña"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <UpdatePassword/>
    </Modal>
    
  );
};

export default UpdatePasswordModal;