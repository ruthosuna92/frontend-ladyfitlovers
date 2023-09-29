import React from "react";

import { Card } from "antd";

const { Meta } = Card;

const Product = ({ id, name, image, price, sales }) => {
  return (
    <div key={id}>
      <img alt={name} src={image} />
      <p>{name}</p>
      <h3>{price}</h3>
        

      {/* card con ant design -> FEA */}
      {/* <Card
        key={id}
        hoverable
        bordered={false}
        style={{
          width: 240,
          
        }}
        cover={<img alt={name} src={image} />}
      >
        <Meta title={name} description={price} />
      </Card> */}
    </div>
  );
};

export default Product;
