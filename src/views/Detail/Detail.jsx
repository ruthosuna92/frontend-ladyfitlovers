import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingMessage from "../../components/LoadingMessage/LoadingMessage";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import getIdDetailProducts from "../../redux/Actions/Product/getIdDetailProducts";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getIdDetailProducts(id));
    return () => {
      dispatch(getIdDetailProducts("none"));
    };
  }, [id, dispatch]);

  const productData = useSelector((state) => state.productDetail);
 
  if (!productData) {
    return <LoadingMessage />;
  }
  return (
    <ProductDetails
      productData={productData}
    />
  );
};
export default Detail;
