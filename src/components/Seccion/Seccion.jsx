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
        <button className="image image--vertical" onClick={() => handleGoToCategory("BUZOS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642919/LadyFitLovers/BUZOS_pi2ugl.jpg"
          />
        </button>
        <button className="image image--big" onClick={() => handleGoToCategory("PANTALONES")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642919/LadyFitLovers/PANTALONES_l2czsh.jpg"
          />
        </button>
        <button className="image image--horizontal" onClick={() => handleGoToCategory("REMERAS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697610707/LadyFitLovers/REMRAS_vywptv.jpg"
          />
        </button>
        <button className="image" onClick={() => handleGoToCategory("BIKERS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642377/LadyFitLovers/BIKERS_iusehp.jpg"
          />
        </button>
        <button className="image image--horizontal" onClick={() => handleGoToCategory("MUSCULOSAS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642919/LadyFitLovers/MUSCULOSA_frar1c.jpg"
          />
        </button>
        <button className="image " onClick={() => handleGoToCategory("TOPS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642377/LadyFitLovers/TOPS_otorcd.jpg"
          />
        </button>
        <button className="image image--big" onClick={() => handleGoToCategory("CALZAS LARGAS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697647822/LadyFitLovers/calzas_largas_ywispv.jpg"
          />
        </button>
        <button className="image image--vertical" onClick={() => handleGoToCategory("SHORTS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642377/LadyFitLovers/SHORTS_bongjm.jpg"
          />
        </button>
        <button className="image " onClick={() => handleGoToCategory("BIKINIS Y ENTERIZAS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642377/LadyFitLovers/BIKINIS_xr5ytp.jpg"
          />
        </button>
        <button className="image image--vertical" onClick={() => handleGoToCategory("CAMPERAS")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642376/LadyFitLovers/CAMPERAS_o6emrm.jpg"
          />
        </button>
        <button className="image image--vertical" onClick={() => handleGoToCategory("CALZAS 3-4")}>
          <img
            className="lazy-image"
            src="https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697642376/LadyFitLovers/CALZAS_3-4_suqvof.jpg"
          />
        </button>
      </div>
    </div>
  );
}

export default Seccion;
