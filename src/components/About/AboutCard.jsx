import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import "./about.css";

const AboutCard = ({user}) => {

  
  return (
    
      <Card
        bordered={false}
        hoverable={true}
        cover={
          <img src={user.image} style={{ objectFit: "cover" }} height={350} />
        }
        style={{
          width: 300,
          height: 550,
        }}
      >
        <Meta title={user.name} description={user.description} />
        <div className="iconAbout">
          <Link to={user.github}>
            <GithubOutlined />
          </Link>

          <Link to={user.linkedin}>
            <LinkedinOutlined />
          </Link>
        </div>
      </Card>
  );
};

export default AboutCard;
