import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CategoryResponse } from '../../types/category';
// import { getCategories, getCategoriesWithSeries } from '../../api/CategoryApi';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { getCategories, getSeriesByCategory } from '../../api/CategoryApi';

// import { Container } from './styles';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [categoryWithSeries, setCategoryWithSeries] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const arr = await getCategories();
        if (arr.length) {
          setCategories(arr);
        }
      } catch (error) {
        console.error('Failed to fetch categories', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!categories.length) return;

    const fetchSeriesFromCategory = async () => {
      const data = {};
      await Promise.all(
        categories.map(async (category) => {
          const series = await getSeriesByCategory(category.id);
          data[category.id] = series;
        }),
      );
      setCategoryWithSeries(data);
    };
    fetchSeriesFromCategory();
  }, [categories]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="page-container">
        {categories.map((category) => (
          <div key={category.id} className="container-fluid p-5">
            <h3 className="fw-bold">{category.name}</h3>
            <div className="serie-list">
              {categoryWithSeries[category.id] &&
                categoryWithSeries[category.id].map((serie) => (
                  <div key={serie.id} className="serie-card">
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
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Categories;
