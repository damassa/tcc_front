import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SerieDetail from '../pages/SerieDetail';
import Categories from '../pages/Categories';
import Login from '../pages/Login';
import Favorites from '../pages/Favorites';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import UpdatePassword from '../pages/UpdatePassword';

const RoutesSite: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<SerieDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSite;
