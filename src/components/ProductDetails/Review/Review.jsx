import React, { useState } from "react";
//actions
import userById from "../../../redux/Actions/User/getUserById";
//style
import styles from "./Review.module.css";

//antd
import { Avatar, Button, Col, Row, Rate, Card, Skeleton, Switch } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const Review = ({ id, reviewText, rating, updatedAt, user }) => {
  //loading
  const [loading, setLoading] = useState(true);

  //loading
  const onChange = (checked) => {
    setLoading(!checked);
  };

  const userName = userById(user.id).name;
  const reviewUser = userById(user.id);
  return (
    <>
      <div>
        <p>Soy la review</p>
        <p>{id}</p>
        <p>{reviewText}</p>
        <p>{rating}</p>
        <Rate disabled defaultValue={rating} />
        <p>{updatedAt}</p>
        <p>{reviewUser.name}</p>
      </div>
      <Switch checked={!loading} onChange={onChange} />

      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={<Avatar src={reviewUser.image} />}
          title={reviewUser.name}
          description={
            <div className={styles.reviewDescription}>
              <Rate disabled defaultValue={rating} />
              <p>{reviewText}</p>
            </div>
          }
        />
      </Card>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
};

export default Review;
