import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import SerieDetail from '../pages/SerieDetail';
import EditUser from '../pages/EditUser';
import Login from '../pages/Login';

const RoutesSite: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/detail' element={<SerieDetail />} />
                <Route path='/edit' element={<EditUser />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesSite;