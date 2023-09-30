const ProductDetails = ({ productData, data, handleColorChange, handleSizeChange, handleAmountChange }) => (
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
  
  export default ProductDetails;