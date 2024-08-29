import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import SerieDetail from '../pages/SerieDetail';
import EditUser from '../pages/EditUser';
import Login from '../pages/Login';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

const RoutesSite: React.FC = () => {
    const [purpleNav, setPurpleNav] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setPurpleNav(true);
            } else {
                setPurpleNav(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);
    
    return (
        <BrowserRouter>
            <Navbar purple = {purpleNav} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/detail' element={<SerieDetail />} />
                <Route path='/edit' element={<EditUser />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesSite;