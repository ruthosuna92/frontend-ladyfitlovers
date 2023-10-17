import { useDispatch, useSelector } from "react-redux";
import getFavoritesByIdUser from "../../redux/Actions/Favs/getFavoritesByIdUser";
import style from "../Products/Products.module.css"
import Product from "../Product/Product";
import { Card, Col, Drawer, Image, Row } from "antd";
import { useEffect } from "react";
import NoFoundScreen from "../NoFoundScreen/NoFoundScreen";
import deleteFav from "../../redux/Actions/Favs/deleteFav";
import { NavLink } from "react-router-dom";


const ProductFavs = () => {
      const dispatch = useDispatch()
      const user = useSelector((state)=> state.user)
      const favorites = useSelector((state)=> state.favorites)
      const accessToken = useSelector((state) => state.accessToken);

  
      
      useEffect(()=> {
        dispatch(getFavoritesByIdUser(user.id))

      },[])

      // console.log(user);
      // console.log("estof" ,favorites);
    return (
      <div className={style.shoppingClientContainer}>
      
      {favorites?.map((fav) => (
        <div key={fav.id}>
            <Card
              key={fav.id}
              bordered={false}
              hoverable={true}
              style={{
                width: "80vh",
                height: 120,
                margin: 5,
              }}
              id={fav.id}
            >
              <Row justify="space-between">
              <Col span={2} onClick={() => dispatch(deleteFav(fav.id, user.id, accessToken))}> <br/>❌</Col>
                <Col span={4}>
                
                  {/* <div >Nombre<br /> {name} </div> */}
                  <div><Image alt={fav.name} src={fav.image && fav.image} width={50} /></div>

                  {/* <div><img alt={fav.name} src={fav.image} width={50} /></div> */}
                </Col>
                <NavLink className={style.buy} to={`/detail/${fav.id}`}>
                <Col span={5}>
                  <div ><br/>{fav.name}</div>
                </Col>
                </NavLink>
                <Col span={4} >
                <div><br/>Precio: ${fav.price}</div>
                  </Col>

              </Row>
            </Card>
        </div>
      ))}
  </div>
    )
}

export default ProductFavs