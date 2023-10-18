import React, { useState, useEffect } from "react";
import { getColorName } from "../../utils/getColorName";
import { Select, message, Divider } from "antd";
import "./productDetails.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { Link } from "react-router-dom";
import DrawerCart from "../ShoppingCart/Drawer/DrawerCart";
import { useDispatch, useSelector } from "react-redux";
import addingProduct from "../../redux/Actions/ShoppingCart/addingProduct";
//import sub components
import ProductReviews from "./ProductReviews/ProductReviews";
import ReviewForm from "./ReviewForm/ReviewForm";
//actions
import getOrdersByUser from "../../redux/Actions/Order/getOrdersByUser";
//react router dom
import { useParams } from "react-router-dom";

const ProductDetails = ({ productData }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.user.id);
  console.log(productData);
  useEffect(() => {
    // saveCartLocal()
  }, []);
  const [messageApi, contextHolder] = message.useMessage();

  //=============================inicializo el arreglo que tiene los objetos con props color y sizeAndQuantity
  let array = productData && productData?.stock;
  //==============================mapeo para obtener el arreglo de solo colores

  const colorsFunc = (array) => {
    if (!array.length) {
      array = ["N/A"];
      return array;
    } else {
      let colors = array.map((col) => col.color);
      return colors;
    }
  };
  const colors = colorsFunc(array);
  //=============================inicializo función que según los parametros que reciba retorna las tallas y cantidades correspondientes a esos colores y/o talla
  const selectsArrays = (color, size) => {
    if (array.length !== 0) {
      const sizeAndQuantity = array?.filter(
        (element) => element.color === color
      )[0].sizeAndQuantity;
      const sizes = sizeAndQuantity?.map((element) => element.size);
      const range = (start, stop, step) =>
        Array.from(
          { length: (stop - start) / step + 1 },
          (_, i) => start + i * step
        );
      if (!size) {
        return {
          sizes,
          quantities: range(1, sizeAndQuantity[0].quantity, 1),
          size: sizes[0],
        };
      } else {
        const quantities = range(
          1,
          sizeAndQuantity.filter((element) => element.size === size)[0]
            .quantity,
          1
        );
        return {
          sizes,
          quantities,
          size,
        };
      }
    } else {
      return {
        sizes: ["Sin stock"],
        quantities: [0],
        size: ["Sin stock"],
      };
    }
  };
  //=======================================estado local que se setea cada vez que el cliente selecciona algo, a su vez se combina con la función
  const [selects, setSelects] = useState({
    color: colors[0],
    sizes: selectsArrays(colors[0], null).sizes,
    quantities: selectsArrays(colors[0], null).quantities,
    size: selectsArrays(colors[0], null).size,
    quantity: selectsArrays(colors[0], null).quantities[0],
  });
  //======================================estado local que abre el DrawerCart
  const [openDrawer, setOpenDrawer] = useState(false);
  //======================================estado local que cierra el DrawerCart
  const onClose = (boolean) => {
    setOpenDrawer(boolean);
  };

  //====================================array de colores mapeado nuevamente para usarlo en el select de ant
  const colorOptions = colors.map((color) => {
    return { value: color, label: getColorName(color) };
  });

  //====================================array de talles mapeado nuevamente para usarlo en el select de ant
  const sizeOptions = selects.sizes.map((size) => {
    return { value: size, label: size };
  });

  //====================================array de cantidades mapeado nuevamente para usarlo en el select de ant
  const quantitiesOptions = selects.quantities.map((q) => {
    return { value: q, label: q };
  });
  //===================================objeto con la información de la selección del cliente
  const shopping = {
    id: productData.id,
    name: productData.name,
    price: productData.price,
    image: productData.image,
    color: selects.color,
    size: selects.size,
    quantity: selects.quantity,
  };
  const max = selects.quantities[selects.quantities.length - 1]; //cantidad máxima de stock del producto renderizado en detail

  const handle = () => {
    if (shopping.quantity) {
      let productExist = cart.find(
        (prod) =>
          prod.id === shopping.id &&
          prod.color === shopping.color &&
          prod.size === shopping.size
      );
      if (productExist && productExist.quantity + shopping.quantity > max) {
        messageApi.open({
          type: "warning",
          content: `Has excedido el límite del stock, puedes agregar ${
            max - productExist.quantity
          } producto(s) más`,
        });
      } else {
        dispatch(addingProduct(shopping));
        setOpenDrawer(true);
      }
    } else {
      messageApi.open({
        type: "warning",
        content: "Este producto esta sin stock",
      });
    }
  };

  //REVIEWS----------------------------------------------------------------
  const accessToken = useSelector((state) => state.accessToken);
  const user = useSelector((state) => state.user);
  const currentProductId = productData.id;
  const [userHasPurchased, setUserHasPurchased] = useState(false);
  const [userHasAlreadyReviewed, setHasAlreadyReviewed] = useState(false);
  //mapear las ordenes del usuario y verificar si dentro de esas ordenes hay al menos un product.id que coincida con el currentProductId

  useEffect(() => {
    if (user.email) {
      dispatch(getOrdersByUser({ userId, accessToken })).then(
        (ordersByUser) => {
          // console.log("entro al then");
          // console.log("ordersByUser:", ordersByUser.payload);
          const hasPurchased =
            Array.isArray(ordersByUser.payload) &&
            ordersByUser.payload.length > 0
              ? ordersByUser.payload.some((order) =>
                  order.products.some(
                    (product) => product.id === currentProductId
                  )
                )
              : false;
          console.log(ordersByUser)
          console.log(hasPurchased, "hasPurchased");
          setUserHasPurchased(hasPurchased);
        }
      );
      //verificar si el usuario YA hizo una review
      const hasAlreadyReviewed =
        productData.Reviews &&
        productData.Reviews.some((review) => review.User[0].id === userId);
      setHasAlreadyReviewed(hasAlreadyReviewed);
    }
    // }, [userId, accessToken, currentProductId, dispatch]);
  }, []);
  // console.log(userHasPurchased);

  return (
    <div>
      {contextHolder}
      {openDrawer && (
        <DrawerCart
          openDrawer={openDrawer}
          onClose={onClose}
          // saveCartLocal={saveCartLocal}
        />
      )}
      <div className="productDetailContainer">
        <div className="productDetailContainerTop">
          <div className="productDetailImageContainer">
            <img
              className="productDetailImage"
              src={productData.image}
              alt={productData.name}
            />
          </div>
          <div className="productDetailInfoContainer">
            <div className="butonant">
              <Link to="/products">
                <ButtonSecondary title="volver" />
              </Link>
            </div>
            <h1 className="productDetailTitle">{productData.name}</h1>
            <p className="productDetailPrice">Precio: ${productData.price}</p>
            <div className="productDetailInputs">
              <Select
                defaultValue={selects.color}
                options={colorOptions}
                onChange={(color) =>
                  setSelects({
                    ...selects,
                    color,
                    sizes: selectsArrays(color, null).sizes,
                  })
                }
                style={{ width: "100%" }}
              />

              <Select
                defaultValue={selects.size}
                options={sizeOptions}
                onChange={(size) =>
                  setSelects({
                    ...selects,
                    size,
                    quantities: selectsArrays(selects.color, size).quantities,
                  })
                }
                style={{ width: "100%" }}
              />

              <Select
                options={quantitiesOptions}
                onChange={(q) => setSelects({ ...selects, quantity: q })}
                style={{ width: "100%" }}
                defaultValue={selects.quantity}
              />

              <ButtonPrimary
                title="Agregar al carrito"
                type="button"
                onClick={handle}
              />
            </div>
          </div>
        </div>
        <div className="productDetailContainerBottom">
          <h2>Opiniones de clientes</h2>

          {userHasPurchased && !userHasAlreadyReviewed && (
            <ReviewForm
              productData={productData}
              userId={userId}
              accessToken={accessToken}
            />
          )}

          <ProductReviews productData={productData} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
