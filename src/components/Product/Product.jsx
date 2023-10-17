import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { Card, Button, Row, Col } from "antd";
import style from "./Product.module.css";


const { Meta } = Card;
const colStyle = {
  width: 10,
  textAlign: "center",
};

const Product = ({ id, name, image, price, unitsSold, color, stock, priceOnSale }) => {
  let sizes = [];

  const navigate = useNavigate();

const productWithoutStock = stock.every((stock)=> stock.sizeAndQuantity.every((sizeAndQuantity)=> sizeAndQuantity.quantity === 0))
const hasSale = priceOnSale !== 0 && priceOnSale !== null

  return (
    <div key={id} className="cardBox">
      <div key={id} className={style.container}>
        <div className={style.card}>
          <div className={style.imgBx}>
            <img className={productWithoutStock? style.productWithoutStock : ""} src={image} alt={name}  />
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
            <button type="button" disabled={productWithoutStock} className={style.buy} onClick={() => navigate(`/detail/${id}`)}>
            {productWithoutStock ? "SIN STOCK" : "COMPRAR"}
          </button>
          </div>
        </div>
      </div>
      <Row>
        <Col style={colStyle} span={24}>
          <NavLink className={style.nameProductCard} to={`/detail/${id}`}>
            <h3>{name}</h3>
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col style={colStyle} className={hasSale ? style.oldPrice : ''} span={24}>
          $ {price}
        </Col>
      </Row>
      {
        hasSale &&  (
          <Row>
            <Col style={colStyle} span={24}>$ {priceOnSale}
            </Col>
          </Row>
        )
      }
      <Row>
        <Col style={colStyle} span={24}>
          <button type="button" disabled={productWithoutStock} className={style.goToBuy} onClick={() => navigate(`/detail/${id}`)}>
            {productWithoutStock ? "SIN STOCK" : "COMPRAR"}
          </button>
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
