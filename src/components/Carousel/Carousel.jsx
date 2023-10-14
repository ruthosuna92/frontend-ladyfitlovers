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
        <img className='carouselSlide' src='https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697137146/1_ijfr7k.png' />
      </div>
      <div>
        <img className='carouselSlide' src='https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697137147/2_pfqrjd.png' />
      </div>
      <div>
        <img className='carouselSlide' src='https://res.cloudinary.com/dv7kzlqy6/image/upload/v1697137147/3_eqcnep.png' />
      </div>
    </Carousel>
  );
};

export default Carrousel;
