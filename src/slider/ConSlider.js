// import React from "react";
// import Slider from "react-slick";
// import "./slider.css"
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const ConSlider = ({ products }) => {
//   const settings = {
//     dots: true,  // Show navigation dots
//     infinite: true,  // Loop through slides infinitely
//     speed: 500,  // Speed of slide transition
//     slidesToShow: 4,  // Number of slides to show at once
//     slidesToScroll: 1,  // Number of slides to scroll per swipe
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const ConSlider = ({ products }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
  
//     const nextSlide = () => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === products.length - 1 ? 0 : prevIndex + 1
//       );
//     };
  
//     const prevSlide = () => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === 0 ? products.length - 1 : prevIndex - 1
//       );
//     };

//   return (
//     <div className="slider-container">
//       <h2>My Food</h2>
//       <Slider {...settings}>
//         {products.map((product, index) => (
//           <div key={index} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ConSlider;


import React, { useRef } from "react";
import Slider from "react-slick";
import "./ConSlider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ConSlider = ({ products }) => {
  const sliderRef = useRef(null); // Create a reference to the slider

  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Loop through slides infinitely
    speed: 500,  // Speed of slide transition
    slidesToShow: 4,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll per swipe
    autoplay: true,  // Enable auto-scrolling
    autoplaySpeed: 2000,
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
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </Slider>
      <button className="arrow left" onClick={() => sliderRef.current.slickPrev()}>
        &lt;
      </button>
      <button className="arrow right" onClick={() => sliderRef.current.slickNext()}>
        &gt;
      </button>
    </div>
  );
};

export default ConSlider;

