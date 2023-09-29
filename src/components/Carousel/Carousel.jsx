import React from "react";
import { Carousel } from "antd";
import "./carouselStyle.css";

const Carrousel = () => {
  return (
    <Carousel autoplay dotPosition='bottom'>
      <div>
        <img className='carouselSlide' src='https://www.shutterstock.com/shutterstock/photos/1182942766/display_1500/stock-vector-brush-sale-banner-promotion-ribbon-banner-scroll-price-tag-sticker-badge-poster-vector-1182942766.jpg' />
      </div>
      <div>
        <img className='carouselSlide' src='https://www.shutterstock.com/shutterstock/photos/1182942766/display_1500/stock-vector-brush-sale-banner-promotion-ribbon-banner-scroll-price-tag-sticker-badge-poster-vector-1182942766.jpg' />
      </div>
      <div>
        <img className='carouselSlide' src='https://www.shutterstock.com/shutterstock/photos/1182942766/display_1500/stock-vector-brush-sale-banner-promotion-ribbon-banner-scroll-price-tag-sticker-badge-poster-vector-1182942766.jpg' />
      </div>
      <div>
        <img className='carouselSlide' src='https://www.shutterstock.com/shutterstock/photos/1182942766/display_1500/stock-vector-brush-sale-banner-promotion-ribbon-banner-scroll-price-tag-sticker-badge-poster-vector-1182942766.jpg' />
      </div>
    </Carousel>
  );
};

export default Carrousel;
