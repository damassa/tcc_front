import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import './style.scss';
// import { FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (formData: { name: string; email: string; password: string; confirmPassword: string }) => {
    console.log('Form Submitted: ', formData);
    // Escrever lógica
  };

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
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle dropdown-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                FD
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark">
                <li>
                  <strong className='dropdown-item dropdown-item-bold'>Felipe Damasceno</strong>
                  <h5 className='dropdown-item dropdown-item-email disabled'>felipelealdamasceno@gmail.com</h5>
                </li>
                <li><a className="dropdown-item" href="#" onClick={handleShow}>Minha conta</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sair</a></li>
                <Modal show={showModal} handleClose={handleClose} handleSubmit={handleSubmit} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;