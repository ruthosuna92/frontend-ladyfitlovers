import React from "react";
import { useDispatch, useSelector } from "react-redux";

//styles
import styles from "./reviewForm.module.css";
//antd
import { Button, Card, Col, Form, Radio, Rate, Row, Input } from "antd";
//actions
import postReview from "../../../redux/Actions/Reviews/postReview";

const ReviewForm = ({ productData, userId, accessToken }) => {
  // const accessToken = useSelector((state) => state.accessToken);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const user = useSelector((state) => state.user);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const { reviewText, rating } = values;
      const productId = productData.id;

      console.log("Form values:", values);

      console.log("Data a enviar", {
        userId,
        productId,
        reviewText,
        rating,
        accessToken,
      });

      //datos a enviar   review -> userId, productId, reviewText, rating, // accessToken
      dispatch(
        postReview({ userId, productId, reviewText, rating }, accessToken)
      );
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  //para ver en consola los cambios en los campos del formulario
  const handleFormValuesChange = (changedValues, allValues) => {
    console.log("Form values:", allValues);
  };

  return (
    <div className={styles.reviewFormContainer}>
      <Card
        className={styles.reviewFormCard}
        bordered={false}
        style={
          {
            // width: 300,
            // marginTop: 16,
            // padding: 0,
          }
        }
      >
        <h4>Gracias por comprar en LadyFitLovers , {user.name}!</h4>
        <p>¡Dejanos tu opinion del producto!</p>
        <Form
          form={form}
          onFinish={handleSubmit}
          onValuesChange={handleFormValuesChange}
          className={styles.reviewForm}
        >
          <Form.Item
            name="rating"
            rules={[
              {
                required: true,
                message: "Por favor seleccione una puntuacion",
              },
            ]}
          >
            {/* no puede ser null */}
            <Rate />
          </Form.Item>
          <Form.Item
            name="reviewText"
            rules={[{ required: true, message: "Ingrese un breve comentario" }]}
          >
            {/* puede ser null */}
            <Input.TextArea allowClear showCount />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ReviewForm;
