import React from 'react';
import './style.scss';

import LoginImage from '../../assets/images/undraw_home_cinema_l7yl.svg';
import LoginButton from '../../components/LoginButton';

const Login: React.FC = () => {
  return (
    <div className="page-container content">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src={LoginImage} className="img-fluid" alt="Home image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <div className="login-inner">
                <form action="">
                  <h3 className="text-black">World of Tokusatsu - Área de Login</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form"
                      className="form-control form-control-lg border-black"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg border-black"
                      placeholder="Senha"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        checked
                      />
                      <label className="custom-control-label text-black" htmlFor="customCheck1">
                        Lembrar-se de mim
                      </label>
                    </div>
                  </div>
                  <div className="d-grid">
                    <LoginButton />
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
    // <div className="page-container content">
    //   <div className="container-fluid p-5">
    //     <div className="row justify-content-center">
    //       <div className="row">
    //         <div className="col-md-6 shadow">
    //           <img src={LoginImage} alt="Image" className="img-fluid w-100" />
    //         </div>
    //         <div className="col-md-6">
    //           <div className="d-flex justify-content-center login-wrapper shadow">
    //             <div className="login-inner">
    //               <form>
    //                 <h3 className="text-black">World of Tokusatsu - Área de Login</h3>
    //                 <div className="mb-3">
    //                   <input
    //                     type="email"
    //                     className="form-control border-black"
    //                     placeholder="E-mail"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <input
    //                     type="password"
    //                     className="form-control border-black"
    //                     placeholder="Senha"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <div className="custom-control custom-checkbox">
    //                     <input type="checkbox" className="custom-control-input" id="customCheck1" />
    //                     <label className="custom-control-label text-black" htmlFor="customCheck1">
    //                       Lembrar-se de mim
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <div className="d-grid">
    //                   <LoginButton />
    //                 </div>
    //                 <p className="forgot-password text-right text-black">
    //                   Esqueceu sua senha? Clique <a href="#">aqui</a>
    //                 </p>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
