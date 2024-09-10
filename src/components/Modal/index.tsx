import React from 'react';
import './style.scss';

interface ModalProps {
    show: boolean;
    title: string;
    body: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, title, body, onClose }) => {
    return (
        <div className={`modal ${show ? 'show d-block' : 'd-none'} fade`} tabIndex={-1}>
            <div className="modal-dialog align-content-center">
                <div className="modal-content modal-dark">
                    <div className="modal-header">
                        <h5 className="modal-title modal-title-big text-center">{title}</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>{body}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-cancel text-black text-uppercase" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="button" className="btn btn-primary btn-standard text-black text-uppercase">
                            Salvar dados
                        </button>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Modal;