import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingMessage from "../../components/LoadingMessage/LoadingMessage";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import getIdDetailProducts from "../../redux/Actions/getIdDetailProducts";
import style from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    selectedSize: "",
    selectedAmount: 0,
    colorDisabled: false,
    inputAmount: 0,
    availableSizes: [],
  });
  useEffect(() => {
    dispatch(getIdDetailProducts(id));
    return () => {
      dispatch(getIdDetailProducts("none"));
    };
  }, [id, dispatch]);
  const productData = useSelector((state) => state.productDetail);
  useEffect(() => {
    if (productData) {
      const firstColor = productData.stock[0];

      setData({
        selectedSize: "",
        selectedAmount: firstColor ? firstColor.sizeAndQuantity[0].quantity : 0,
        colorDisabled: false,
        inputAmount: 0,
        availableSizes: firstColor ? firstColor.sizeAndQuantity : [],
      });
    }
  }, [productData]);

  const handleSizeChange = (value) => {
    const selectedSizeValue = value;
    const selectedSizeObject = data.availableSizes.find(
      (size) => size.size === selectedSizeValue
    );

    setData((prevData) => ({
      ...prevData,
      selectedSize: selectedSizeValue,
      selectedAmount: selectedSizeObject ? selectedSizeObject.quantity : 0,
      inputAmount: 0,
    }));
  };

  const handleColorChange = (value) => {
    const selectedColor = value;
    console.log(selectedColor)
    const colorData = productData.stock.find(
      (color) => color.color === selectedColor
    );

    setData((prevData) => ({
      ...prevData,
      ...{
        availableSizes: colorData ? colorData.sizeAndQuantity : [],
        selectedSize: colorData ? colorData.sizeAndQuantity[0].size : "",
        colorDisabled: !colorData || colorData.sizeAndQuantity.length === 0,
        selectedAmount: colorData ? colorData.sizeAndQuantity[0].quantity : 0,
        inputAmount: 0,
      },
    }));
  };
  const handleAmountChange = (event) => {
    const newAmount = +event.target.value;
    if (
      !isNaN(newAmount) &&
      newAmount >= 0 &&
      newAmount <= data.selectedAmount
    ) {
      setData((prevData) => ({
        ...prevData,
        inputAmount: newAmount,
      }));
    }
  };

  console.log(data);
  console.log(productData);
  if (!productData) {
    return <LoadingMessage />;
  }
  return (


    <ProductDetails
      productData={productData}
      data={data}
      handleColorChange={handleColorChange}
      handleSizeChange={handleSizeChange}
      handleAmountChange={handleAmountChange}
    />

  );
};
export default Detail;
