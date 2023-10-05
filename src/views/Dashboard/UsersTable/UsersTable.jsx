import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllUsers from "../../../redux/Actions/User/getAllUsers";
import { Button, Switch, Table, Tag } from "antd";
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

  const allUsers = useSelector((state) => state.allUsers);
  const onChange = (value, user) => {
    dispatch(userBan(value, user));
  }

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
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
      key: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Rol",
      dataIndex: "typeUser",
      key: "typeUser",
      render: (text, record) => {
        return (
          <Tag color={record.typeUser === "admin" ? "red" : "green"}>
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
            <Button type="secondary" icon={<DeleteOutlined />} size="small" />
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
            onChange={()=> onChange(!cell.value === true? false : true ,cell )}
          />
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getAllUsers());
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
