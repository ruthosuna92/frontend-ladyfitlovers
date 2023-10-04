import Carousel from "../../components/Carousel/Carousel";
;
import SearchBar from "../../components/SearchBar/SearchBar";
import LoginModal from "../../components/LoginModal/LoginModal";
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
