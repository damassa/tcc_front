import { Navigate } from 'react-router-dom';

const isAuth = (): boolean => {
  return !localStorage.getItem('token');
};
const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  return isAuth() ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
