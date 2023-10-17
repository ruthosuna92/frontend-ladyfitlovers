import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

import { Card, Button, Row, Col } from "antd";
import style from "./Product.module.css";


import { useDispatch, useSelector } from "react-redux";
import addFavs from "../../redux/Actions/Favs/addFavorites";
import deleteFav from "../../redux/Actions/Favs/deleteFav";
import getFavoritesByIdUser from "../../redux/Actions/Favs/getFavoritesByIdUser";
const { Meta } = Card;
const colStyle = {
  width: 10,
  textAlign: "center",
};

const Product = ({ id, name, image, price, unitsSold, color, stock, priceOnSale }) => {
  const user = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.accessToken);
  const favorites = useSelector((state) => state.favorites);
  let sizes = [];

  const navigate = useNavigate();

const productWithoutStock = stock.every((stock)=> stock.sizeAndQuantity.every((sizeAndQuantity)=> sizeAndQuantity.quantity === 0))
const hasSale = priceOnSale !== 0 && priceOnSale !== null



  const addfavHandler = ()=> {

    dispatch(addFavs(id, user.id, accessToken))

    
  }
  
  const deleteFavHandler = () => {

    dispatch(deleteFav(id, user.id, accessToken))

  }


  return (
    <div key={id} className="cardBox">
      <div key={id} className={style.container}>
        <div className={style.card}>
          <div className={style.imgBx}>
            <img src={image} alt={name} />
          </div>

          <div className={style.contentBx}>
            <div className={style.size}>
              
              <h3>Talle :</h3>
              
              {stock?.map(({ sizeAndQuantity }) => {
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
              {stock? stock.map((color, index) => {
                return (
                  <span key={index} style={{ background: color.color }}></span>
                );
              }): ""}
            </div>
              
              


<button type="button" disabled={productWithoutStock} className={style.buy} onClick={() => navigate(`/detail/${id}`)}>
            {productWithoutStock ? "SIN STOCK" : "COMPRAR"}
          </button>
            
            
  {favorites?.find((fav) => fav.id === id)
  ? 
  (<button onClick={deleteFavHandler}>SACAR FAV</button>)
  :
  (<button onClick={addfavHandler}>FAV</button>)
}
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
      {stock ? 
      <Row>
        <Col style={colStyle} span={24}>
          $ {price}
        </Col>
      </Row>
      :""}
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
          <NavLink className={style.buy} to={`/detail/${id}`}>
            Comprar
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
