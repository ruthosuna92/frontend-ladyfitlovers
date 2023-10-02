import React, { useState } from "react";
import { getColorName } from "../../utils/getColorName";
import { Select, Input } from "antd";
import "./productDetails.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

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
  console.log(selectedProduct);
  const colorOptions = productData.stock.map((color) => {
    return { value: color.color, label: getColorName(color.color) };
  });

  const sizeOptions = data.availableSizes.map((size) => {
    return { value: size.size, label: size.size };
  });
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
