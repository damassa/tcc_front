import React from 'react';
import './style.css';
// import { FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
  <div className="container-fluid">
    <a className="navbar-logo navbar-brand" href="/">World of Tokusatsu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/categories">Categorias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/favorites">Favoritos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    // <header className={purple ? 'purple' : ''}>
    //     <div className='header--logo'>
    //         <a href="/">World of Tokusatsu</a>
    //     </div>
    //     <div className="header--search">
    //       <input type="text" classNameName='search--input' placeholder='O que está procurando?' />
    //       <button className="search--button">
    //         <FaSearch />
    //       </button>
    //     </div>
    //     <a href="/edit">
    //       <div className='header--user'>
    //         FD
    //       </div>
    //     </a>
    // </header>
  );
}

export default Navbar;