import React, { useState } from "react";
import { getColorName } from "../../utils/getColorName";
import { Select, Input } from "antd";
import "./productDetails.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { element } from "prop-types";

const ProductDetails = ({
  productData,
  data,
  handleColorChange,
  handleSizeChange,
  handleAmountChange,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState({
    name: productData.name,
    price: productData.price * selectedQuantity,
    image: productData.image,
    size: "",
    color: "",
  });
  const [selects, setSelects] = useState({
    color: colors[0],
    sizes: [],
    quantity: 1
  })

  const colorOptions = productData.stock.map((color) => {
    return { value: color.color, label: getColorName(color.color) };
  });
  console.log();
  const sizeOptions = data.availableSizes.map((size) => {
    return { value: size.size, label: size.size };
  });
  useEffect(() => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      size: "", // Restablece la talla cuando cambia el color
    }));
  }, [selectedProduct.color]);

  const array = productData && productData?.stock
  const colors = array.map((col)=> col.color)
  
  const selectsArrays = (color, size) => {
  
    if(array.length !== 0){
      const sizeAndQuantity = array.filter((element) => element.color === color)[0].sizeAndQuantity
      const sizes = sizeAndQuantity.map((element) => element.size)
      const topQuantity = sizeAndQuantity.filter((element) => element.size === size)[0].quantity
      return {
        sizes,
        topQuantity
      }
    }
  }
  console.log(array);
  console.log(colors);
  console.log(selectsArrays("gray", "l"));
  return (
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
              options={colorOptions}
              onChange={handleColorChange}
              style={{ width: "100%" }}
            />
            <Select
              options={sizeOptions}
              onChange={handleSizeChange}
              style={{ width: "100%" }}
            />
            <label htmlFor="amount">Cantidad:</label>
            <Input
              type="number"
              id="amount"
              name="amount"
              value={data.inputAmount}
              max={data.selectedAmount}
              style={{ width: "100%" }}
              onChange={handleAmountChange}
            />
            <ButtonPrimary
              title="Agregar al carrito"
              type="button"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="productDetailContainerBottom">
        <h2>Opiniones</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
