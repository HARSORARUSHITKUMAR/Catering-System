// ProductSlider.js
import React from 'react';
import Slider from "react-slick";

const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="product-slide">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
