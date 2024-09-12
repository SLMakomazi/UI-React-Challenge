// src/components/CardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import { PrevArrowComponent, NextArrowComponent } from './customArrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrowComponent />,
  prevArrow: <PrevArrowComponent />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const CardCarousel = () => {
  return (
    <Slider {...settings}>
      <Card title="Corporate Premium Elite" image={require('../images/corp1.jpg')} />
      <Card title="Business Premium Elite" image={require('../images/buss1.jpg')} />
      <Card title="Business Platinum Plus" image={require('../images/platn1.jpg')} />
    </Slider>
  );
};

export default CardCarousel;
