import React from "react";
import Slider from "react-slick";
import "./slider.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ConSlider = ({ products }) => {
  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Loop through slides infinitely
    speed: 500,  // Speed of slide transition
    slidesToShow: 4,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll per swipe
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>My Food</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ConSlider;
