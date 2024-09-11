import React from 'react';
import './style.scss';
import PosterImage from '../../assets/images/Changeman.png';
import AddFavoriteButton from '../../components/AddFavoriteButton';
import { FaShareAlt } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from 'react-slick';
import EpisodeThumb from '../../assets/images/episode_thumb.jpg';

const SerieDetail: React.FC = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Navbar />
                <div className='page-container'>
                    <div className="detail-banner">
                        <div className="detail-image-container">
                            <img src={PosterImage} alt="" />
                        </div>
                        <div className="detail-shadow-container">
                            <div className="detail-name-year">
                                <h1 className='fw-bold'>Dengeki Sentai Changeman</h1>
                                <h2 className='fw-bold'>1985</h2>
                            </div>
                            <div className="detail-fav-share">
                                <AddFavoriteButton />
                                <FaShareAlt size={20} />
                            </div>
                        </div>
                        <div className="detail-plot">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dignissim mi, ac tincidunt risus. Donec nec arcu erat. Vestibulum nec felis rhoncus eros laoreet pretium in a massa. Sed pharetra ligula vitae nisi dictum, vel sodales sapien semper. 
                                Fusce imperdiet, sapien ac posuere consectetur, ante mauris ornare risus, in porttitor mi lacus a nisi. Mauris rhoncus iaculis placerat. 
                                Nullam turpis arcu, malesuada vitae est at, vestibulum faucibus arcu. Ut nec odio ultricies, viverra ligula ut, hendrerit mauris. Ut semper, mi ut efficitur auctor, sem eros tempor lacus, vel facilisis elit velit vulputate arcu.
                            </p>
                        </div>
                        <div className="detail-info">
                            <div className="detail-info-image">
                                <img src="https://media.fstatic.com/y9en3f1_mvlP9mSZ_gAAhl0TSHE=/210x312/smart/filters:format(webp)/media/movies/covers/2010/01/ae29d514be77f161a1cedbcc4bbd3ec0.jpg" alt="Serie" />
                            </div>
                            <div className="detail-data">
                                <strong>Nome Completo: Dengeki Sentai Changeman</strong>
                                <strong>Categoria: Super Sentai</strong>
                                <strong>Ano: 1985</strong>
                                <strong>Duração: 20 minutos</strong>
                            </div>
                        </div>
                        <div className="slider-container carousel-container">
                            <Slider {...settings}>
                                <div>
                                    <iframe 
                                        src="https://www.youtube.com/watch?v=9McojMr8UiU" 
                                        frameBorder="0"
                                        width="230"
                                        height="190"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div>
                                    <iframe 
                                        src="https://www.youtube.com/watch?v=9McojMr8UiU" 
                                        frameBorder="0"
                                        width="230"
                                        height="190"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div>
                                    <iframe 
                                        src="https://www.youtube.com/watch?v=9McojMr8UiU" 
                                        frameBorder="0"
                                        width="230"
                                        height="190"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div>
                                    <iframe 
                                        src="https://www.youtube.com/watch?v=9McojMr8UiU" 
                                        frameBorder="0"
                                        width="230"
                                        height="190"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div>
                                    <iframe 
                                        src="https://www.youtube.com/watch?v=9McojMr8UiU" 
                                        frameBorder="0"
                                        width="230"
                                        height="190"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            <Footer />
            </>
    )
}

export default SerieDetail;