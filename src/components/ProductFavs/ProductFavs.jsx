import { useDispatch, useSelector } from "react-redux";
import getFavoritesByIdUser from "../../redux/Actions/Favs/getFavoritesByIdUser";
import style from "../Products/Products.module.css"
import Product from "../Product/Product";
import { Card, Col, Drawer, Row } from "antd";
import { useEffect } from "react";
import NoFoundScreen from "../NoFoundScreen/NoFoundScreen";


const ProductFavs = () => {
      const dispatch = useDispatch()
      const user = useSelector((state)=> state.user)
      const favorites = useSelector((state)=> state.favorites)
      
    
      
      useEffect(()=> {
        dispatch(getFavoritesByIdUser(user.id))

      },[dispatch])
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
                width: "120vh",
                height: 120,
                margin: 5,
              }}
              id={fav.id}
            >
              <Row justify="center">
                <Col span={4}>
                  {/* <div >Nombre<br /> {name} </div> */}
                  <div><img alt={fav.name} src={fav.image} width={50} /></div>
                </Col>
                <Col span={5}>
                  <div ><br/>{fav.name}</div>
                </Col>
                <Col span={4} >
                <div><br/>Precio:{fav.price}</div>
                  </Col>

              </Row>
            </Card>
        </div>
      ))}
  </div>
    )
}

export default ProductFavs