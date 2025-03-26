import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/LoadMoreButton';
import Footer from '../../components/Footer';
import { SerieResponse } from '../../types/serie';
import { getFavoriteSeries } from '../../api/SerieApi';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Favorites: React.FC = () => {
  const [series, setSeries] = useState<SerieResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await getFavoriteSeries();
        setSeries(favorites);
      } catch (error) {
        console.error('Erro ao trazer séries', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="container-fluid p-5">
          <h3 className="fw-bold">Minha lista</h3>
          <div className="serie-list">
            {/* hehehe */}
            {series.map((serie) => (
              <div className="serie-card" key={serie.id}>
                <Link to={`/detail/${serie.id}`}>
                  <img
                    className="d-block w-100"
                    src={serie.image}
                    alt={serie.name}
                    title={serie.name}
                  />
                </Link>
              </div>
            ))}
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
