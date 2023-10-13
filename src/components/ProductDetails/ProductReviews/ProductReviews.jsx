import React, { useState } from "react";
//styles
import style from "./productReviews.module.css";

//actions
//components
import Review from "../Review/Review";
//antd
import { Pagination, Select } from "antd";
const { Option } = Select;

const ProductReviews = ({ productData }) => {
  // console.log(productData);

  //reviews
  const reviews = productData.Reviews;

  //paginacion
  const [current, setCurrent] = useState(1);
  const pageSize = 4;
  const onChange = (page) => {
    setCurrent(page);
  };

  //filtros
  const handleFilterChange = (value) => {
    console.log("cambio el filtro", value);
  };

  return (
    <div className={style.container}>
      {/* agregar filtro por rating y ordenamiento por fecha */}
      <div className={style.filters}>
        <Select
          defaultValue="Rating"
          style={{ width: 120 }}
          onChange={handleFilterChange}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>
      </div>
      <div className={style.reviewsContainer}>
        {/* mapear las reviews del producto que vienen en un array */}
        {!reviews ? (
          <>
            <h4>
              Actualmente este producto no cuenta con reseñas, ¡sé el primero!
            </h4>
          </>
        ) : (
          reviews
            .slice((current - 1) * pageSize, current * pageSize)
            .map(({ id, reviewText, rating, productreview, user }) => (
              //id, reviewText, rating,updatedAt,user.id
              <Review
                key={id}
                id={id}
                reviewText={reviewText}
                rating={rating}
                updatedAt={productreview.updatedAt}
                user={user}
              />
            ))
        )}
      </div>
      {/* cambiar paginacion para que dependa de si hay reviews / de la cantidad que haya */}
      <div className={style.pagination}>
        <Pagination
          current={current}
          onChange={onChange}
          total={reviews ? reviews.length : 0}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default ProductReviews;
