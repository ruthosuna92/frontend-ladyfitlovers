import React from "react";
import style from "./Product.module.css";

import { Card } from "antd";

const { Meta } = Card;

const Product = ({ id, name, image, price, sales }) => {
  return (
    <div key={id}>
      {/* <img alt={name} src={image} />
      <p>{name}</p>
      <h3>{price}</h3> */}

      <Card
        key={id}
        hoverable
        bordered={false}
        style={{
          width: 240,
        }}
        cover={<img alt={name} src={image} />}
      >
        <Meta title={name} description={`$ ${price}`} />
      </Card>
      <div className={style.card}>
        <div className={style.cardImg}>
          <img alt={name} src={image} />
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardText}>
            <p className={style.textTitle}>{name}</p>
            <p className={style.textSubtitle}>{price}</p>
          </div>
          <div className={style.cardIcon}>
            <svg viewBox="0 0 28 25" className={style.icon}>
              <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
{
  /* card con ant design -> FEA */
}
{
  /*       <Card
        key={id}
        hoverable
        bordered={false}
        style={{
          width: 240,
        }}
        cover={<img alt={name} src={image} />}
      >
        <Meta title={name} description={`$ ${price}`} />
      </Card>*/
}
