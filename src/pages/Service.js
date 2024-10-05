import React from 'react';
import ProductSlider from '../slider/ProductSlider';



const Service = () => {
  const servicesData = [
    {
      id: 1,
      name: "Sandwiches",
      products: [
        { image: "../public/images/p1.jpg", title: "Products-1", description: "A Real NYC Classic" },
        { image: "../public/images/p2.jpg", title: "Products-1", description: "Cheesy and delicious" },
        { image: "images/p3.jpg", title: "Products-1", description: "Perfectly grilled" },
        { image: "images/p4.jpg", title: "Products-1", description: "Juicy and flavorful" },
      ],
    },
    {
      id: 2,
      name: "Steaks",
      products: [
        { image: "images/p1.jpg", title: "NYC Sandwich", description: "A Real NYC Classic" },
        { image: "images/p2.jpg", title: "Grilled Cheese", description: "Cheesy and delicious" },
        { image: "images/p3.jpg", title: "T-Bone Steak", description: "Perfectly grilled" },
        { image: "images/p4.jpg", title: "Ribeye Steak", description: "Juicy and flavorful" },
      ],
    },
    {
      id: 3,
      name: "Fruits",
      products: [
        { image: "images/p1.jpg", title: "NYC Sandwich", description: "A Real NYC Classic" },
        { image: "images/p2.jpg", title: "Grilled Cheese", description: "Cheesy and delicious" },
        { image: "images/p3.jpg", title: "T-Bone Steak", description: "Perfectly grilled" },
        { image: "images/p4.jpg", title: "Ribeye Steak", description: "Juicy and flavorful" },
      ],
    },
  ];

  return (
    <div className="service-section" id="service"> {/* Anchor link to scroll here */}
      <h2>Our Services</h2>
      <p>Explore our range of delicious offerings.</p>

      {servicesData.map((service) => (
        <div key={service.id} className="service-slider">
          <h3>{service.name}</h3>
          <ProductSlider products={service.products} />
        </div>
      ))}
    </div>
  );
};

export default Service;