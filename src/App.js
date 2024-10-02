// import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Carasoul from "./components/Carasoul";
// import About from "./pages/About";
// import Menu from "./pages/Menu";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Carasoul />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Carasoul from "./components/Carasoul";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Service from './pages/Service';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Header />
      <Carasoul />
      <div id="about" style={{ paddingTop: '60px' }}> {/* Adjust this value as needed */}
        <About />
      </div>
      <div id="menu" style={{ paddingTop: '60px' }}>
        <Menu />
      </div>
      <div id="contact" style={{ paddingTop: '60px' }}>
        <Contact />
      </div>
      {/* <div id="service" style={{ paddingTop: '60px' }}>
        <Service />
      </div> */}
    </>
  );
}

export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import './App.css';
// import Header from './components/Header';
// import Carasoul from "./components/Carasoul";
// import About from "./pages/About";
// import Menu from "./pages/Menu";
// import Contact from "./pages/Contact";
// import Service from './pages/Service';

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Carasoul />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/service" element={<Service />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
