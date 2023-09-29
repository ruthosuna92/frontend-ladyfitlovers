import React from "react";
import style from "./Product.module.css";
import { Link } from "react-router-dom";

import { Card } from "antd";
const { Meta } = Card;

const size = ["xs", "s", "m", "l"];
const colour = ["white", "black", "red", "blue"];
const Product = ({ id, name, image, price, sales }) => {
  return (
    <div key={id}>
      {/* <img alt={name} src={image} />
      <p>{name}</p>
      <h3>{price}</h3> */}
      <Link to={`/detail/${id}`}>
      <div key={id} className={style.container}>
        <div className={style.card}>
          <div className={style.imgBx}>
            <img src={image} alt={name} />
          </div>

          <div className={style.contentBx}>
            <h2>{name}</h2>
            {/* mapear el array de size para renderizar un span con cada size */}

            <div className={style.size}>
              <h3>Talle :</h3>
              {size.map((talle) => {
                return <span>{talle}</span>;
              })}
            </div>
            <div className={style.color}>
              <h3>Color :</h3>
              {colour.map((colour) => {
                return (
                  <span key={colour} style={{ background: colour }}></span>
                );
              })}
            </div>
            <p href="#">Comprar</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Product;
{
  /* card con ant design -> FEA - no leva estilos*/
}
{
  /*     
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
      </Card>*/
}

// CARD 2

{
  /* <div className={style.card}>
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
</div> */
}

// CARD 3
{
  /* <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" alt="nike-air-shoe">
            </div>

            <div class="contentBx">

                <h2>Nike Shoes</h2>

                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>

                <div class="color">

                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="#">Buy Now</a>
            </div>

        </div>
    </div> */
}
