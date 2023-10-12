
import { Modal } from "antd";
import UpdatePassword from "../UpdatePassword/UpdatePassword";

const UpdatePasswordModal = ({ visible, onClose }) => {
 
  return (
      <Modal
      title="Actualizar Contraseña"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <UpdatePassword onClose={onClose}/>
    </Modal>
    
  );
};

export default UpdatePasswordModal;