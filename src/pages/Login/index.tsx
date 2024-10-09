import React from 'react';
import './style.scss';

import LoginImage from '../../assets/images/login-image.png';
import LoginButton from '../../components/LoginButton';

const Login: React.FC = () => {

    return (
        <div className="page-container content">
            <div className="container-fluid p-5">
                <div className="row justify-content-center">
                    <div className="row">
                        <div className="col-md-6 shadow">
                            <img src={LoginImage} alt="Image" className='img-fluid w-100' />
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center login-wrapper shadow">
                                <div className="login-inner">
                                    <form>
                                        <h3 className='text-black'>World of Tokusatsu - Área de Login</h3>
                                        <div className="mb-3">
                                            <input
                                                type="email"
                                                className="form-control border-black"
                                                placeholder="E-mail"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="password"
                                                className="form-control border-black"
                                                placeholder="Senha"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck1"
                                                />
                                                <label className="custom-control-label text-black" htmlFor="customCheck1">Lembrar-se de mim</label>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <LoginButton />
                                        </div>
                                        <p className="forgot-password text-right text-black">
                                            Esqueceu sua senha? Clique <a href="#">aqui</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;