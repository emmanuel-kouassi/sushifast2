import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        
        <Link className="navbar-brand" to="/">
          SushiFast
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Menus Complets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/filtres">Filtres Spécifiques</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/statistiques">Statistiques & Prix</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;