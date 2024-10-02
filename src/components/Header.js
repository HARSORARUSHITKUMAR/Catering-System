import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4" style={{cursor:'pointer'
        }}>Gourmet au Catering</span>
      </Link>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/service" className="nav-link" aria-current="page">Servise</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;