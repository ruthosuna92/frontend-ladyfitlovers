import React from "react";
import { Carousel } from "antd";
import "./carouselStyle.css";

const Carrousel = () => {
  return (
    <Carousel autoplay dotPosition='bottom'>
      <div>
        <img className='carouselSlide' src='https://res.cloudinary.com/dv7kzlqy6/image/upload/v1696224356/slide_yyk6fv.svg' />
      </div>
      <div>
        <img className='carouselSlide' src='https://res.cloudinary.com/dv7kzlqy6/image/upload/v1696224356/slide_yyk6fv.svg' />
      </div>
      <div>
        <img className='carouselSlide' src='https://res.cloudinary.com/dv7kzlqy6/image/upload/v1696224356/slide_yyk6fv.svg' />
      </div>
      <div>
        <img className='carouselSlide' src='https://res.cloudinary.com/dv7kzlqy6/image/upload/v1696224356/slide_yyk6fv.svg' />
      </div>
    </Carousel>
  );
};

export default Carrousel;
