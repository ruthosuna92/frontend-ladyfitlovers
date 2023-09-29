import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Detail =()=>{
    const { id } = useParams();
    const [data, setData] = useState(null);
    console.log(data)
    useEffect(() => {
      axios.get(`https://pf-back-production-4255.up.railway.app/product/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error al hacer la solicitud a la API:', error);
        });
    }, [id]);
    if (!data) {
        return <div>Cargando datos...</div>;
      }
    
      // Renderizar la información del producto
      return (
        <div>
          <img src={data.image} alt={data.name} />
          <h1>{data.name}</h1>
          <p>Precio: {data.price}</p>
          <select name="size" id=""><option value="">{data.stock.map(size => size.size)}</option></select>
        </div>
      );
}
export default Detail