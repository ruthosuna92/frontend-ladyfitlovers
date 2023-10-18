import { useDispatch, useSelector } from "react-redux";
import getFavoritesByIdUser from "../../redux/Actions/Favs/getFavoritesByIdUser";
// import style from "../Products/Products.module.css"
import Product from "../Product/Product";
import { Button, Card, Col, Drawer, Image, Row } from "antd";
import { useEffect } from "react";
import NoFoundScreen from "../NoFoundScreen/NoFoundScreen";
import deleteFav from "../../redux/Actions/Favs/deleteFav";
import { NavLink } from "react-router-dom";
import style from "../ShoppingClient/ShoppingClient.module.css";



const ProductFavs = () => {
      const dispatch = useDispatch()
      const user = useSelector((state)=> state.user)
      const favorites = useSelector((state)=> state.favorites)
      const accessToken = useSelector((state) => state.accessToken);

  
      
      useEffect(()=> {
        dispatch(getFavoritesByIdUser(user.id))

      },[])
      // console.log(favorites, "mis favortios");

    return (
      <div className={style.shoppingClientContainer}>
      {!favorites.length  ? <NoFoundScreen text={"No se encontraron favoritos"}/>
      
      :favorites?.map((fav) => (
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
              <Row justify="center">
                <Col span={3}>
  

                  <div><Image alt={fav.name} src={fav.image && fav.image} width={50} /></div>
                </Col>
                <Col span={11}>
                <NavLink className={style.buy} to={`/detail/${fav.id}`}>
                  <div >{fav.name}</div>
                </NavLink>
                <div>Precio: ${fav.price}</div>
                </Col>
                <Col span={3} >
                  </Col>
              <Button id={fav.name} shape='circle' size='small' onClick={() => dispatch(deleteFav(fav.id, user.id, accessToken))}>x</Button>


              </Row>
            </Card>
        </div>
      ))}
  </div>
    )
}

export default ProductFavs