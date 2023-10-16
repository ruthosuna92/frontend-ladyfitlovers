//dep
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink, Link } from "react-router-dom";
import styles from "./reviewsClient.module.css";
//actions
import getReviewsByUser from "../../redux/Actions/Reviews/getReviewsByUser";
//ant
import {
  Layout,
  Menu,
  Button,
  theme,
  Rate,
  Card,
  Row,
  Col,
  Divider,
} from "antd";
import {
  ShoppingOutlined,
  UserOutlined,
  EditOutlined,
  StarOutlined,
  HeartOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const customIcons = {
  1: <FrownOutlined style={{ color: "red" }} />,
  2: <FrownOutlined style={{ color: "orange" }} />,
  3: <MehOutlined style={{ color: "yellow" }} />,
  4: <SmileOutlined style={{ color: "yellowgreen" }} />,
  5: <SmileOutlined style={{ color: "green" }} />,
};

const ReviewsClient = ({ infoUser }) => {
  console.log(infoUser);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.accessToken);
  console.log(accessToken);
  const reviewsByUser = useSelector((state) => state.reviewsByUser);
  console.log(reviewsByUser);
  const userId = infoUser.id;
  console.log(userId);

  useEffect(() => {
    dispatch(getReviewsByUser({ userId, accessToken }));
  }, []);

  // promedio
  const calcAverageRating = () => {
    if (!reviewsByUser || reviewsByUser.length === 0) return 0;
    const totalRating = reviewsByUser.reduce(
      (total, review) => total + review.rating,
      0
    );
    return totalRating / reviewsByUser.length;
  };

  const averageRating = calcAverageRating();

  return (
    <div>
      <div>
        <h1>
          Mis reseñas <SmileOutlined />
        </h1>
        <div className={styles.average}>
          <h2>Promedio de estrellas que he dado</h2>
          <Rate defaultValue={averageRating} disabled />
          <p>sobre ... reseñas </p>
        </div>
        <div className={styles.reviewsContainer}>
          {reviewsByUser &&
            reviewsByUser.map((review) => {
              const formattedDate = new Date(
                review.createdAt
              ).toLocaleDateString("es-AR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <Card
                  hoverable
                  style={{ width: 350 }}
                  cover={<img alt="example" src={review.Product[0].image} />}
                >
                  <Meta
                    // title={review.title}
                    description={
                      <div className={styles.ratingContainer}>
                        <div className={styles.ratingIcon}>
                          {customIcons[review.rating]}
                        </div>

                        <div className={styles.cardInfo}>
                          <p>{formattedDate}</p>
                          <Rate defaultValue={review.rating} disabled />
                          <p>{review.reviewText}</p>
                          <a href={review.productLink}>Ir al producto</a>
                        </div>
                      </div>
                    }
                  />
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsClient;
