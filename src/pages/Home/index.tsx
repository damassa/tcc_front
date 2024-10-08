import './style.scss';
import Slider from 'react-slick';

import imageBanner from '../../assets/images/undraw_horror_movie_3988.svg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SerieCard from '../../components/SerieCard';
import LoadMoreButton from '../../components/LoadMoreButton';
import { DefaultError, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { deleteSerie, getSeries } from '../../api/SerieApi';

type SerieListProps = {
    logOut?: () => void;
};

const Home: React.FC = ({ logOut }: SerieListProps) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
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

    // const { data, error, isSuccess } = useQuery({
    //     queryKey: ["series"],
    //     queryFn: getSeries,
    // });

    // if (!isSuccess) {
    //     return <p>Carregando...</p>;
    // } else if (error) {
    //     return <p>Erro no carregamento de dados...</p>;
    // } else {
        
    // }

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
                        <h3 className='fw-bold'>Lançamentos</h3>
                        <div className="slider-container carousel-container">
                            <Slider {...settings}>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                                <div>
                                    <SerieCard />
                                </div>
                            </Slider>
                        </div>
                        <h3 className='fw-bold'>Séries Populares</h3>
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
                            <LoadMoreButton />
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}
export default Home;