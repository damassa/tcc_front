import React from 'react';
import './style.scss';

import LoginImage from '../../assets/images/login-image.png';

const Login: React.FC = () => {

    return (
        <div className="page-container">
            <div className="container-fluid p-5">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="img" style={{ backgroundImage: LoginImage }}></div>
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Sign in</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="social-media d-flex justify-content-end">
                                            <a href="#" className='social-icon d-flex align-items-center justify-content-center'>
                                                <span className="fa fa-facebook">
                                                    ::before
                                                </span>
                                            </a>
                                            <a href="#" className='social-icon d-flex align-items-center justify-content-center'>
                                                <span className="fa fa-google">
                                                    ::before
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <form action="#" className='signin-form'>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="label">E-mail</label>
                                        <input type="text" className='form-control' placeholder='E-mail' required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password" className="label">Senha</label>
                                        <input type="text" className='form-control' placeholder='Senha' required />
                                    </div>
                                    <div className="form-group">
                                        <button className="form-control btn btn-primary rounded submit px-3">Entrar</button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50 text-left">
                                            <label htmlFor="" className="checkbox-wrap checkbox-primary mb-0">
                                                Lembrar-se de mim
                                                <input type="checkbox" checked />
                                                <span className="checkmark">
                                                    ::after
                                                </span>
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Esqueceu sua senha?</a>
                                        </div>
                                    </div>
                                </form>
                                <p className="text-center">
                                    Não tem conta? <a data-toggle="tab" href="#" className='active'>Registre-se</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;