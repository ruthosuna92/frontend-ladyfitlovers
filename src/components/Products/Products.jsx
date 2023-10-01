import Product from "../Product/Product";
import { useSelector} from "react-redux";
import getAllProducts from "../../redux/Actions/getAllProducts";

import style from "./Products.module.css";

const Products = () => {
  const allProducts = useSelector((state) => state.allProducts)
  
  return (
    <div className={style.cardsContainer}>
      {allProducts &&
        allProducts?.map(({ id, name, image, price, sales, size, colour }) => {
          return (
            <Product
              id={id}
              name={name}
              image={image}
              price={price}
              sales={sales}
              colour={colour}
              size={size}
            />
          );
        })}
    </div>
  );
};

export default Products;
