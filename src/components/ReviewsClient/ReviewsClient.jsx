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
    const fetchData = async () => {
      try {
        await dispatch(getReviewsByUser({ userId, accessToken }));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchData();
    // dispatch(getReviewsByUser({ userId, accessToken }));
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
    <div className={styles.container}>
      <h1>
        Mis reseñas <SmileOutlined />
      </h1>

      <div className={styles.average}>
        <h3 className={styles.averageTitle}>
          Nivel de satisfacción segun mis reseñas
        </h3>
        <div className={styles.averageIcon}>
          <div className={styles.iconFace}>
            {customIcons[Math.round(averageRating)]}
          </div>

          <Card>
            <Rate defaultValue={averageRating} disabled />
            <p> {averageRating} (puntuación promedio)</p>
            <p> {reviewsByUser?.length} (total de reseñas)</p>
          </Card>
        </div>
      </div>

      <div className={styles.reviewsContainer}>
        {reviewsByUser &&
          reviewsByUser.map((review) => {
            const formattedDate = new Date(review.createdAt).toLocaleDateString(
              "es-AR",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );

            return (
              <div className={styles.reviewCard}>
                <Card
                  className={styles.reviewCard}
                  hoverable
                  style={{ width: 250 }}
                  size="small"
                  cover={
                    <img
                      alt="example"
                      src={review.Product[0].image}
                      style={{
                        objectFit: "cover",
                        height: "200px",
                        borderRadius: "5px",
                      }}
                    />
                  }
                >
                  <Meta
                    description={
                      <div className={styles.ratingContainer}>
                        <h3>{review.Product[0].name}</h3>

                        <div className={styles.cardInfo}>
                          <Rate defaultValue={review.rating} disabled />
                          <p>{review.reviewText}</p>
                          {/* NOTA */}
                          <NavLink
                            className={styles.productLink}
                            to={`/detail/${review.Product[0].id}`}
                          >
                            Ir al producto
                          </NavLink>
                        </div>
                        <div className={styles.ratingIcon}>
                          <div className={styles.icon}>
                            {customIcons[review.rating]}
                          </div>

                          <p className={styles.reviewDate}>{formattedDate}</p>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ReviewsClient;
