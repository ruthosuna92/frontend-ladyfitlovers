import React, { useState } from "react";
import { getColorName } from "../../utils/getColorName";
import { Select} from "antd";
import "./productDetails.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { Link } from "react-router-dom";
import DrawerCart from "../ShoppingCart/Drawer/DrawerCart";
import { useDispatch, useSelector } from "react-redux";
import addingProduct from "../../redux/Actions/ShoppingCart/addingProduct";


const ProductDetails = ({
  productData
}) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  console.log(cart);
  //=============================inicializo el arreglo que tiene los objetos con props color y sizeAndQuantity
  const array = productData && productData?.stock
  //==============================mapeo para obtener el arreglo de solo colores
  const colors = array.map((col)=> col.color)
  //=============================inicializo función que según los parametros que reciba retorna las tallas y cantidades correspondientes a esos colores y/o talla
  const selectsArrays = (color, size) => {
    if(array.length !== 0){
      const sizeAndQuantity = array?.filter((element) => element.color === color)[0].sizeAndQuantity
      const sizes = sizeAndQuantity?.map((element) => element.size)
      const range = (start, stop, step) => 
      Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
      if(!size){
        return {
          sizes,
          quantities: range(1, sizeAndQuantity[0].quantity, 1),
          size: sizes[0]
        }
      } else {
        const quantities = range(1, sizeAndQuantity.filter((element) => element.size === size)[0].quantity, 1)
        return {
          sizes,
          quantities,
          size
        }
      }
    }
  }
  //=======================================estado local que se setea cada vez que el cliente selecciona algo, a su vez se combina con la función
  const [selects, setSelects] = useState({
    color: colors[0],
    sizes: selectsArrays(colors[0], null).sizes,
    quantities: selectsArrays(colors[0], null).quantities,
    size: selectsArrays(colors[0], null).size,
    quantity: 1
  })
  //======================================estado local que abre el DrawerCart
  const [openDrawer, setOpenDrawer] = useState(false)
  //======================================estado local que cierra el DrawerCart
  const onClose = (boolean) => {
    setOpenDrawer(boolean)
  };
  //====================================array de colores mapeado nuevamente para usarlo en el select de ant
  const colorOptions = colors.map((color) => {
    return { value: color, label: getColorName(color) };
  });
  
  //====================================array de talles mapeado nuevamente para usarlo en el select de ant
  const sizeOptions = selects.sizes.map((size) => {
    return { value: size, label: size };
  });
  
  //====================================array de cantidades mapeado nuevamente para usarlo en el select de ant
  const quantitiesOptions = selects.quantities.map((q) => {
    return { value: q, label: q };
  });
  //===================================objeto con la información de la selección del cliente
  const shopping = {
    id: productData.id, 
    name: productData.name,
      price: productData.price * selects.quantity,
      image: productData.image,
      color: selects.color,
      size: selects.size,
      quantity: selects.quantity
  }
  console.log(shopping);
  const handle = () => {
    dispatch(addingProduct(shopping))
    setOpenDrawer(true)
  }
  return (
    <div>{openDrawer && <DrawerCart
    openDrawer={openDrawer}
    onClose={onClose}/>}
    <div className="productDetailContainer">
      <div className="productDetailContainerTop">
        
        <div className="productDetailImageContainer">
          <img
            className="productDetailImage"
            src={productData.image}
            alt={productData.name}
          />
        </div>
        <div className="productDetailInfoContainer">
        <div className="butonant">
          <Link to="/products">
          <ButtonSecondary title="volver"/>
          </Link>
        </div>
          <h1 className="productDetailTitle">{productData.name}</h1>
          <p className="productDetailPrice">Precio: ${productData.price}</p>
          <div className="productDetailInputs">
            <Select
              defaultValue={selects.color}
              options={colorOptions}
              onChange={(color) => setSelects({...selects, color, sizes: selectsArrays(color, null).sizes})}
              style={{ width: "100%" }}
              
            />
  
            <Select
              defaultValue={selects.size}
              options={sizeOptions}
              onChange={(size) => setSelects({...selects, size, quantities: selectsArrays(selects.color, size).quantities})}
              style={{ width: "100%" }}
            />

            
            <Select
              options={quantitiesOptions}
              onChange={(q) => setSelects({...selects, quantity: q}) }
              style={{ width: "100%" }}
              defaultValue={selects.quantity}
            />
           
            <ButtonPrimary
              title="Agregar al carrito"
              type="button"
              onClick={handle}
            />
          </div>
        </div>
      </div>
      <div className="productDetailContainerBottom">
        <h2>Opiniones</h2>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
