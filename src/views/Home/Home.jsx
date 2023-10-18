import Carousel from "../../components/Carousel/Carousel";
import MostSoldProducts from "../../components/MostSoldProducts/MostSoldProducts";
import Seccion from "../../components/Seccion/Seccion";
import { useSelector } from "react-redux";
import MenuBurger from "../../components/MenuBurger/MenuBurger";


const Home = () => {
  const menuBurger = useSelector(state => state.menuBurger)
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
    {menuBurger ? <MenuBurger></MenuBurger> : null}
    </div>
  );
};

export default Home;
