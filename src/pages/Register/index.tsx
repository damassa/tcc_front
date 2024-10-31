import React from 'react';
import RegisterButton from '../../components/RegisterButton';

const Register: React.FC = () => {
  return (
    <div className="page-container content">
      <div className="container-fluid p-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="d-flex justify-content-center login-wrapper shadow">
              <div className="login-inner">
                <form>
                  <h3 className="text-black">World of Tokusatsu - Área de Registro</h3>
                  <div className="mb-3">
                    <input type="text" className="form-control border-black" placeholder="Nome" />
                  </div>
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
                    <input
                      type="password"
                      className="form-control border-black"
                      placeholder="Confirme sua senha"
                    />
                  </div>
                  <div className="d-grid">
                    <RegisterButton />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
