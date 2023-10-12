import React from "react";
//antd
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
} from "antd";

const ReviewForm = () => {
  // userId, productId,reviewText,rating,
  return (
    <div>
      <Form>
        <Form.Item label="Review Text">
          {/* allowNull */}
          <textarea placeholder="Write your review here" />
        </Form.Item>
        <Form.Item label="Review">
          {/* no puede ser null */}
          <Rate />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReviewForm;
