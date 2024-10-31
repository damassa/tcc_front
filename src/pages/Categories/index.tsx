import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/LoadMoreButton';
import SerieCard from '../../components/SerieCard';

// import { Container } from './styles';

const Categories: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="container-fluid p-5">
          <h3 className="fw-bold">Super Sentai</h3>
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
          <h3 className="fw-bold">Ultraman</h3>
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

export default Categories;
