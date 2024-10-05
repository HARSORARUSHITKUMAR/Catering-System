import React from "react";
import ConSlider from "./ConSlider";

const productData = [
  {
    image: "images/p1.jpg",
    title: "Product-1",
    description: "A Real NYC Classic",
  },
  {
    image: "images/p2.jpg",
    title: "Let Me Tell You About This Steak",
    description: "A delightful meal",
  },
  {
    image: "images/p3.jpg",
    title: "Cherries, Interrupted",
    description: "Fresh cherries in a bag",
  },
  {
    image: "images/p4.jpg",
    title: "Once Again, Robust Wine and Vegetable Pasta",
    description: "A pairing of wine and pasta",
  },
  // Add more products as needed
];

const App = () => {
  return (
    <div>
      <ConSlider products={productData} />
    </div>
  );
};

export default App;
