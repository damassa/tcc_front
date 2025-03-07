import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { SerieResponse } from '../../types/serie';
import './style.css';
import { getSeriesOrderedByYear } from '../../api/SerieApi';

const Carousel: React.FC = () => {
  const [series, setSeries] = React.useState<SerieResponse[]>([]);
  // const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      const arr = await getSeriesOrderedByYear();
      setSeries(arr);
    };

    fetchSeries();
  }, []);

  // useEffect(() => {
  //   api
  //     .get('/api/v1/series', {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log('DADOS PASSADOS', response.data.content);
  //       setSeries(response.data.content);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
        <div key={serie.id}>
          <Link to={`/detail/${serie.id}`}>
            <div className="serie-card">
              <img
                className="d-block w-100"
                src={serie.image}
                alt={serie.name}
                title={serie.name}
              />
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
