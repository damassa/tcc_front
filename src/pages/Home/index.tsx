import './style.scss';
import imageBanner from '../../assets/images/undraw_horror_movie_3988.svg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import LoadMoreButton from '../../components/LoadMoreButton';
import { useEffect, useState } from 'react';
import { SerieResponse } from '../../types/serie';
import { getAllSeries } from '../../api/SerieApi';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [series, setSeries] = useState<SerieResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const arr = await getAllSeries();
        if (arr.length) {
          setSeries(arr);
        }
      } catch (error) {
        console.error('Failed to fetch series', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="container-fluid p-5">
          <div className="banner">
            <div className="banner-left">
              <p>Assista todas as suas séries favoritas de Tokusatsu no conforto de sua casa.</p>
            </div>
            <div className="banner-right">
              <img src={imageBanner} alt="imagem da homepage" />
            </div>
          </div>
          <h3 className="fw-bold">Lançamentos</h3>
          <Carousel />
          <h3 className="fw-bold">Séries Populares</h3>
          <div className="serie-list">
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
            <LoadMoreButton />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
