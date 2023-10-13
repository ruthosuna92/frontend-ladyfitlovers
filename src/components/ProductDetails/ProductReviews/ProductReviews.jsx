import React, { useState } from "react";
//styles
import style from "./productReviews.module.css";

//actions
//components
import Review from "../Review/Review";
//antd
import { Pagination } from "antd";

const ProductReviews = ({ productData }) => {
  console.log(productData);
  //reviews
  const reviews = productData.reviews;
  //paginacion
  const [current, setCurrent] = useState(3);

  //paginacion
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div className={style.reviewsContainer}>
      {/* agregar filtro por rating y ordenamiento por fecha */}

      {/* mapear las reviews del producto que vienen en un array */}
      {!reviews ? (
        <>
          <h4>
            Actualmente este producto no cuenta con reseñas, ¡sé el primero!
          </h4>
        </>
      ) : (
        reviews.map(({ id, reviewText, rating, updatedAt, user }) => (
          //id, reviewText, rating,updatedAt,user.id
          <Review
            key={id}
            id={id}
            reviewText={reviewText}
            rating={rating}
            updatedAt={updatedAt}
            user={user}
          />
        ))
      )}
      {/* cambiar paginacion para que dependa de si hay reviews / de la cantidad que haya */}
      <Pagination current={current} onChange={onChange} total={50} />
    </div>
  );
};

export default ProductReviews;
