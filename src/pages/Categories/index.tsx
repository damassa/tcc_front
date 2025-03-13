import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CategoryResponse } from '../../types/category';
import { getCategories } from '../../api/CategoryApi';
import Loading from '../../components/Loading';

// import { Container } from './styles';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  // const [series, setSeries] = useState([]);
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
            {/* <div className="serie-list">
              {series}
            </div> */}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Categories;
