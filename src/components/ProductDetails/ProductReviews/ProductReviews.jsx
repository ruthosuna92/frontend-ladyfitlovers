import React, { useState } from "react";
//styles
import style from "./productReviews.module.css";

//actions
//components
import Review from "./Review/Review";
//antd
import { Pagination } from "antd";

const ProductReviews = ({ productData }) => {
  const reviews = productData.reviews;

  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div className={style.reviewsContainer}>
      {/* mapear las reviews del producto que vienen en un array */}

      {reviews.map(({ id, reviewText, rating, updatedAt, user }) => {
        //id, reviewText, rating,updatedAt,user.id
        return (
          <>
            <Review
              key={id}
              id={id}
              reviewText={reviewText}
              rating={rating}
              updatedAt={updatedAt}
              user={user}
            />
          </>
        );
      })}
      <Pagination current={current} onChange={onChange} total={50} />
    </div>
  );
};

export default ProductReviews;
