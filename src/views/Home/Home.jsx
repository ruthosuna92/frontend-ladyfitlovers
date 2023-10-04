import Carousel from "../../components/Carousel/Carousel";
;
import SearchBar from "../../components/SearchBar/SearchBar";
import LoginModal from "../../components/LoginModal/LoginModal";
import MostSoldProducts from "../../components/MostSoldProducts/MostSoldProducts";


const Home = () => {

  return (
    <div>
      <Carousel />
      <MostSoldProducts />
      {/* <Products/> */}
      {/* importar novedades! */}

{/* 
      <LoginModal /> */}
    </div>
  );
};

export default Home;
