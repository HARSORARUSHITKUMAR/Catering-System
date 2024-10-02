import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Carasoul from "./components/Carasoul";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path="/carasoul" element={<Carasoul />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;