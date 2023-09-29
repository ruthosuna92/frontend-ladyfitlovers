import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    selectedSize: '',
    selectedAmount: 0,
    colorDisabled: false,
    inputAmount: 0,
    availableSizes: [],
  });

  useEffect(() => {
    axios
      .get(`https://pf-back-production-4255.up.railway.app/product/${id}`)
      .then((response) => {
        setData((prevData) => ({
          ...prevData,
          ...{
            data: response.data,
            availableSizes:
              response.data && response.data.stock.length > 0
                ? response.data.stock[0].sizeAndQuantity
                : [],
            selectedAmount:
              response.data && response.data.stock.length > 0
                ? response.data.stock[0].sizeAndQuantity[0].quantity
                : 0,
          },
        }));
      })
      .catch((error) => {
        console.error('Error al hacer la solicitud a la API:', error);
      });
  }, [id]);

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
    const colorData = data.data.stock.find((color) => color.color === selectedColor);

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

  if (!data.data) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <img src={data.data.image} alt={data.data.name} />
      <h1>{data.data.name}</h1>
      <p>Precio: {data.data.price}</p>
      <select name="color" id="" onChange={handleColorChange}>
        {data.data.stock.map((color) => (
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

