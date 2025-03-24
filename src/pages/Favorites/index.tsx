import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/LoadMoreButton';
import Footer from '../../components/Footer';
import { SerieResponse } from '../../types/serie';
import { getFavoriteSeries } from '../../api/SerieApi';
import Loading from '../../components/Loading';

// import { Container } from './styles';

const Favorites: React.FC = () => {
  const [series, setSeries] = useState<SerieResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favSeries = await getFavoriteSeries();
        if (favSeries.length) {
          setSeries(favSeries);
          console.log('DADOS', favSeries);
        }
      } catch (error) {
        console.error('Failed to fetch series', error);
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
                <img src={serie.image} alt={serie.name} />
                <p>{serie.name}</p>
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
