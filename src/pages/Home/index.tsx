import './style.scss';
import imageBanner from '../../assets/images/undraw_horror_movie_3988.svg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import LoadMoreButton from '../../components/LoadMoreButton';

const Home: React.FC = () => {
  // const filteredData = [
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 1,
  //     name: 'Himitsu Sentai Gorenger',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  //   {
  //     id: 2,
  //     name: 'J.A.K.Q Dengekitai',
  //     image: 'https://tinyurl.com/3rvedd47',
  //   },
  // ];

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
            <div className="serie-card">HEHEHEHEHEHEHEHEHE</div>
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
