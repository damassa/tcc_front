import React from 'react';
import Navbar from '../../components/Navbar';
import SerieCard from '../../components/SerieCard';
import Button from '../../components/LoadMoreButton';
import Footer from '../../components/Footer';

// import { Container } from './styles';

const Favorites: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="container-fluid p-5">
          <h3 className="fw-bold">Minha lista</h3>
          <div className="serie-list">
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
            <SerieCard />
          </div>
          <div className="text-center my-3">
            <Button />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
