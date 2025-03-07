// import { Credential } from '../../types/types';

import React, { FormEvent, useState } from 'react';
import './style.scss';
import LoginImage from '../../assets/images/undraw_home_cinema_l7yl.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../api/api';

/**
 * Login component for user authentication
 * @returns JSX.Element
 */
const Login: React.FC = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // State for storing user credentials
  const [credential, setCredential] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  /**
   * Handle changes in input fields
   * @param event - React change event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Input changed: ${event.target.name} = ${event.target.value}`);
    setCredential({ ...credential, [event.target.name]: event.target.value });
  };

  /**
   * Handle form submission
   * @param event - React submit event
   */
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Handle login logic
    try {
      const response = await api.post(`/api/v1/login`, {
        email: credential.email,
        senha: credential.password,
      });
      const { token } = response.data;
      localStorage.setItem('jwt', token);
      navigate('/');
    } catch (error) {
      // Handle login error
      setError('Login failed. Please check your credentials.');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="page-container content">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              {/* Display login image */}
              <img src={LoginImage} className="img-fluid" alt="Home image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <div className="login-inner">
                {/* Login form */}
                <form action="" method="post" onSubmit={handleSubmit}>
                  <h3 className="text-black">World of Tokusatsu - Área de Login</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form"
                      name="email"
                      className="form-control form-control-lg border-black"
                      placeholder="E-mail"
                      required
                      onChange={handleChange} // Handle input change
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg border-black"
                      placeholder="Senha"
                      required
                      onChange={handleChange} // Handle input change
                    />
                  </div>
                  <div className="mb-3"></div>
                  <div className="d-grid">
                    {/* Submit button */}
                    <button type="submit" className="login--button">
                      LOGIN
                    </button>
                  </div>
                  <p className="forgot-password text-right text-black">
                    Esqueceu sua senha? Clique <a href="/forgotPassword">aqui</a>
                  </p>
                  <p className="register text-black text-center">
                    Não possui conta? Registre-se <a href="/register">aqui</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
