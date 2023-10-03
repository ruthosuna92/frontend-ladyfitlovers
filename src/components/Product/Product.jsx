import React from "react";
import style from "./Product.module.css";
import { Link } from "react-router-dom";

import { Card, Button, Row, Col } from "antd";
const { Meta } = Card;
const colStyle = {
  // width: "25%",
  textAlign: "center",

};

const Product = ({ id, name, image, price, unitsSold, color, stock }) => {
  let sizes = [];

  return (
    <div key={id}>
      <div key={id} className={style.container}>
        <div className={style.card}>
          <div className={style.imgBx}>
            <img src={image} alt={name} />
          </div>

          <div className={style.contentBx}>
            {/*  */}
            {/* <h2>{unitsSold} vendidos</h2> */}

            <div className={style.size}>
              <h3>Talle :</h3>
              {stock.map(({ sizeAndQuantity }) => {
                return sizeAndQuantity.map((sizeInfo, index) => {
                  if (sizes.includes(sizeInfo.size)) return;
                  else {
                    sizes.push(sizeInfo.size);
                    return (
                      sizeInfo.quantity > 0 && (
                        <span key={index}>{sizeInfo.size.toUpperCase()}</span>
                      )
                    );
                  }
                });
              })}
            </div>

            <div className={style.color}>
              <h3>Color :</h3>
              {stock.map((color, index) => {
                return (
                  <span key={index} style={{ background: color.color }}></span>
                );
              })}
            </div>
            <Link to={`/detail/${id}`}>
           Comprar
            </Link>
          </div>
        </div>
      </div>
      <Row>
       
        <Col style={colStyle} span={24} >
          <h3>{name}</h3>
        </Col>        
      </Row>
      <Row>
        <Col style={colStyle} span={24}>
          $ {price}
        </Col>
      </Row>
    </div>
  );
};

export default Product;

{
  /* <div key={id}>
        <div key={id} className={style.container}>
          <div className={style.card}>
            <div className={style.imgBx}>
              <img src={image} alt={name} />
            </div>

            <div className={style.contentBx}>
              <h2>{name}</h2>
              <h2>$ {price}</h2>
              <h2>{unitsSold} vendidos</h2>

              <div className={style.size}>
                <h3>Talle :</h3>
                {stock.map(({ sizeAndQuantity }) => {
                  return sizeAndQuantity.map((sizeInfo, index) => {
                    if (sizes.includes(sizeInfo.size)) return;
                    else {
                      sizes.push(sizeInfo.size);
                      return (
                        sizeInfo.quantity > 0 && (
                          <span key={index}>{sizeInfo.size}</span>
                        )
                      );
                    }
                  });
                })}
              </div>

              <div className={style.color}>
                <h3>Color :</h3>
                {stock.map((color, index) => {
                  return (
                    <span key={index} style={{ background: color.color }}>
                      z
                    </span>
                  );
                })}
              </div>
              <a href="#">Comprar</a>
            </div>
          </div>
        </div>
      </div> */
}
