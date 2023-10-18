import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllUsers from "../../../redux/Actions/User/getAllUsers";
import { Button, Switch, Table, Tag, message } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import CreateAcountModal from "../../../components/CreateAcountModal/CreateAcountModal";
import userBan from "../../../redux/Actions/User/banUser";

const UsersTable = () => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showBanModal, setShowBanModal] = useState(false);
  const [user, setUser] = useState({});

  const accessToken = useSelector((state) => state.accessToken);
  const allUsers = useSelector((state) => state.allUsers);
  
  
  const onChange = async (value, user) => {
    try {
     const response= await dispatch(userBan(value, user, accessToken));
     if(response){
      dispatch(getAllUsers(accessToken));
      message.success("Usuario actualizado correctamente", [2] , onClose() );
      }
    } catch (error) {
      
    }
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Apellido",
      dataIndex: "surname",
      key: "surname",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      key: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Telefono",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <p>{text  || "No definido"}</p>,
    },
    {
      title: "Dirección",
      dataIndex: "address",
      key: "address",
      render: (value) => <p>{value !== null ? `${value?.calle} ${value?.numero} ${value?.dpto} ${value?.entreCalles} ${value?.localidad} ${value?.provincia} ${value?.codigoPostal}` : "No definido"}</p>,
    },
    {
      title: "Rol",
      dataIndex: "typeUser",
      filters: [
        { text: "Admin", value: "Admin" },
        { text: "Usuario", value: "User" },
      ],
      onFilter: (value, record) => record.typeUser.indexOf(value) === 0,
      key: "typeUser",
      render: (text, record) => {
        return (
          <Tag color={record.typeUser === "Admin" ? "green" : "blue"}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Acciones",
      dataIndex: "",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="primary"
              icon={<EditOutlined />}
              size="small"
              onClick={() => {
                setShowEditModal(true), setUser(record);
              }}
            />
          </div>
        );
      },
    },
    {
      title: "Banneado",
      dataIndex: "",
      key: "userBan",
      render: (cell) => {
        return (
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={cell.userBan === true ? true : false}
            onChange={() =>
              onChange(cell.userBan === true ? false : true, cell)
            }
          />
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getAllUsers(accessToken));
  }, []);

  return (
    <div>
      {user && showEditModal && (
        <CreateAcountModal
          visible={showEditModal}
          onClose={() => setShowEditModal(false)}
          isEditing={true}
          user={user}
        />
      )}
      <Table dataSource={allUsers} columns={columns} />
    </div>
  );
};

export default UsersTable;
