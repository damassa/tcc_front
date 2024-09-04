import React, { useEffect } from 'react';
import './style.css';
// import { FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  useEffect(() => {
    const navElement = document.querySelector('.navbar');

    const handleScroll = () => {
      if (window.scrollY >= 50) {
        navElement?.classList.add('navbar-purple');
      } else {
        navElement?.classList.remove('navbar-purple');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container-fluid">
        <a className="navbar-logo navbar-brand" href="/">World of Tokusatsu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/categories">Categorias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">Favoritos</a>
            </li>
          </ul>
          <div className="d-flex">
            <a href="/edit">
              <div className="navbar-user">FD</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;