import Carousel from "../../components/Carousel/Carousel";
import MostSoldProducts from "../../components/MostSoldProducts/MostSoldProducts";
import Seccion from "../../components/Seccion/Seccion";


const Home = () => {

  return (
    <div>
      <Carousel />
      <MostSoldProducts />
      {/* <Products/> */}
      {/* importar novedades! */}
    <div>
      <Seccion />
    </div>
{/* 
      <LoginModal /> */}
    </div>
  );
};

export default Home;
