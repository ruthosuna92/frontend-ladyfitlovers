import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filtByCategory } from "../../redux/Actions/Filter/filtByCategory";
import "./seccion.css";


const Seccion = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
  

const handleGoToCategory = (category) => {
  dispatch(filtByCategory(category));
  navigate(`/products/${category}`);
};


  return (
    
      <div className="center">
        <h1>Te invitamos a conocer nuestros productos</h1>
        <div className="gallery"> 
          <button className="image image--vertical" onClick={()=> handleGoToCategory("BUZOS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697237738/LadyFitLovers/8_pfxbpy.jpg"
            /> 
          </button>
          <button className="image image--big" onClick={()=> handleGoToCategory("PANTALONES")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697237739/LadyFitLovers/4_sczghs.jpg"
            />
          </button>
          <button className="image image--horizontal" onClick={()=> handleGoToCategory("REMERAS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697237739/LadyFitLovers/5_tpj9oq.jpg"
            />
          </button>
          <button className="image" onClick={()=> handleGoToCategory("BIKERS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697237740/LadyFitLovers/2_gwyvyp.jpg"
            />
          </button>
          <button className="image image--horizontal" onClick={()=> handleGoToCategory("MUSCULOSAS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697237740/LadyFitLovers/7_cb5zsz.jpg"
            />
          </button>
          <button className="image " onClick={()=> handleGoToCategory("TOPS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697237738/LadyFitLovers/10_x7hd8e.jpg"
            />
          </button>
          <button className="image image--big" onClick={()=> handleGoToCategory("CALZAS LARGAS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697237738/LadyFitLovers/9_stqldd.jpg"
            />
          </button>
          <button className="image image--vertical" onClick={()=> handleGoToCategory("SHORTS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697239847/LadyFitLovers/home_4_z6xeqq.png"
            />
          </button>
          <button className="image " onClick={()=> handleGoToCategory("BIKINIS Y ENTERIZAS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697239612/LadyFitLovers/home_na7wgk.png"
            />
          </button>
          <button className="image image--vertical" onClick={()=> handleGoToCategory("CAMPERAS")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697239847/LadyFitLovers/home_3_ptaiaw.png"
            />
          </button>
          <button className="image image--vertical" onClick={()=> handleGoToCategory("CALZAS 3-4")}>
            <img
              className="lazy-image"
              src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697239612/LadyFitLovers/home_2_w4sley.png"
            />
          </button>
        </div>
      </div>
    
  );
};

export default Seccion;
