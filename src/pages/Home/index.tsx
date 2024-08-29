import './style.scss';

import imageBanner from '../../assets/images/undraw_horror_movie_3988.svg';

import SerieCard from '../../components/SerieCard';
import SerieList from '../../components/SerieList';

const Home: React.FC = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-left">
                    <p>Assista todas as suas séries favoritas de Tokusatsu no conforto de sua casa.</p>
                </div>
                <div className="banner-right">
                    <img src={imageBanner} alt="sdfsdfsd" />
                </div>
            </div>
            <div className="cards">
                <SerieCard />
            </div>
            <div>
                <SerieList />
            </div>
        </>
    );
}
export default Home;


