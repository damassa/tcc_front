import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import './style.scss';
import AddFavoriteButton from '../../components/AddFavoriteButton';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from 'react-slick';
import { SerieResponse } from '../../types/serie';
import { useParams } from 'react-router-dom';
import { getSerieById } from '../../api/SerieApi';
import { getEpisodesBySerieId } from '../../api/EpisodesApi';
import { EpisodeResponse } from '../../types/episode';

const SerieDetail: React.FC = () => {
  const [serie, setSerie] = useState<SerieResponse>();
  const [episodes, setEpisodes] = useState<EpisodeResponse[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSerie = async () => {
      const response = await getSerieById(Number(id));
      setSerie(response);
    };

    const fetchEpisodes = async () => {
      const response = await getEpisodesBySerieId(Number(id));
      setEpisodes(response);
    };
    fetchSerie();
    fetchEpisodes();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="detail-banner">
          <div className="detail-image-container">
            <img src={serie?.bigImage} alt="" />
          </div>
          <div className="detail-shadow-container">
            <div className="detail-name-year">
              <h1 className="fw-bold">{serie?.name}</h1>
              <h2 className="fw-bold">{serie?.year}</h2>
            </div>
            <div className="detail-fav-share">
              <AddFavoriteButton />
            </div>
          </div>
          <div className="detail-plot">
            <p>{serie?.plot}</p>
          </div>
          <div className="detail-info">
            <div className="detail-info-image">
              <img className="detail-image-card" src={serie?.image} alt="Serie" />
            </div>
            <div className="detail-data">
              <strong>Nome Completo: {serie?.name}</strong>
              <strong>Categoria: {serie?.categoryName}</strong>
              <strong>Ano: {serie?.year}</strong>
            </div>
          </div>
          <div className="container-fluid p-5">
            <div className="slider-container carousel-container">
              <Slider {...settings}>
                {episodes.map((episode) => (
                  <div key={episode.id}>
                    <ReactPlayer url={episode.link} width={260} height={190} light controls />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SerieDetail;
