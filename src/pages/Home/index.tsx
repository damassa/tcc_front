import './style.scss';

import imageBanner from '../../assets/images/undraw_horror_movie_3988.svg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SerieCard from '../../components/SerieCard';

const Home: React.FC = () => {
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
                        <div className="carousel slide">
                            <div className="carousel-inner">
                                <SerieCard />
                            </div>
                            <div className="carousel-inner">
                                <SerieCard />
                            </div>
                            <div className="carousel-inner">
                                <SerieCard />
                            </div>
                            <div className="carousel-inner">
                                <SerieCard />
                            </div>
                            <div className="carousel-inner">
                                <SerieCard />
                            </div>
                            <div className="carousel-inner">
                                <SerieCard />
                            </div>
                            <div className="carousel-inner">
                                <SerieCard />
                            </div>
                            <div className="carousel-inner">
                                <SerieCard />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}
export default Home;