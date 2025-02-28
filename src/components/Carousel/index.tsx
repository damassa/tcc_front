import React, { useEffect } from 'react';
import api from '../../api/api';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { SerieResponse } from '../../types/serie';
import './style.css';

const Carousel: React.FC = () => {
  const [series, setSeries] = React.useState<SerieResponse[]>([]);

  useEffect(() => {
    api
      .get('/api/v1/series')
      .then((response) => {
        setSeries(response.data);
        console.log('DADOS PASSADOS', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [series]);

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
    <Slider {...settings}>
      {series.map((serie) => (
        <div key={serie.uid}>
          <Link to={`/detail/${serie.uid}`}>
            <div className="serie-card">
              <img
                className="d-block w-100"
                src={serie.image}
                alt={serie.name}
                title={serie.name}
              />
              <p>{serie.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
