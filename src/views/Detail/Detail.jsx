import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import getIdDetailProducts from '../../redux/Actions/getIdDetailProducts';

const Detail = () => {
  const { id } = useParams();
  const dispatch=useDispatch()
  const [data, setData] = useState({
    selectedSize: '',
    selectedAmount: 0,
    colorDisabled: false,
    inputAmount: 0,
    availableSizes: [],
  });
  useEffect(()=>{
    dispatch(getIdDetailProducts(id))
  },[id, dispatch])
  const productData = useSelector((state)=> state.products)
  console.log(productData)
  useEffect(() => {
    // Actualizar el estado de 'data' cuando 'productData' cambie
    if (productData) {
      const firstColor = productData.stock[0];

      setData({
        selectedSize: '',
        selectedAmount: firstColor ? firstColor.sizeAndQuantity[0].quantity : 0,
        colorDisabled: false,
        inputAmount: 0,
        availableSizes: firstColor ? firstColor.sizeAndQuantity : [],
      });
    }
  }, [productData]);

  const handleSizeChange = (event) => {
    const selectedSizeValue = event.target.value;
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

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    const colorData = productData.stock.find((color) => color.color === selectedColor);

    setData((prevData) => ({
      ...prevData,
      ...{
        availableSizes: colorData ? colorData.sizeAndQuantity : [],
        selectedSize: colorData ? colorData.sizeAndQuantity[0].size : '',
        colorDisabled: !colorData || colorData.sizeAndQuantity.length === 0,
        selectedAmount: colorData ? colorData.sizeAndQuantity[0].quantity : 0,
        inputAmount: 0,
      },
    }));
  };

  const handleAmountChange = (event) => {
    const newAmount = +event.target.value;
    if (!isNaN(newAmount) && newAmount >= 0 && newAmount <= data.selectedAmount) {
      setData((prevData) => ({
        ...prevData,
        inputAmount: newAmount,
      }));
    }
  };

  if (!productData) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <img src={productData.image} alt={productData.name} />
      <h1>{productData.name}</h1>
      <p>Precio: {productData.price}</p>
      <select name="color" id="" onChange={handleColorChange}>
        {productData.stock.map((color) => (
          <option key={color.color} value={color.color}>
            {color.color}
          </option>
        ))}
      </select>
      <select
        name="size"
        id=""
        onChange={handleSizeChange}
        value={data.selectedSize}
        disabled={data.colorDisabled}
      >
        {data.availableSizes.map((size) => (
          <option key={size.size} value={size.size}>
            {size.size}
          </option>
        ))}
      </select>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={data.inputAmount}
        max={data.selectedAmount}
        onChange={handleAmountChange}
      />
    </div>
  );
};

export default Detail;

