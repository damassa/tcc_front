import React from 'react';
import { FaInstagram, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import MyAccountButton from '../MyAccountButton';

import './style.scss';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='footer-left'>
                Assista suas séries favoritas. <br />
                <span>World of Tokusatsu. All rights reserved.</span>
            </div>
            <div className='footer-right'>
                <MyAccountButton />
                <div className='footer-social'>
                    <a href="http://instagram.com/damassaa" target='_blank' rel="noreferrer">
                        <FaInstagram size={20} />
                    </a>
                    <a href="http://github.com/damassa" target='_blank' rel="noreferrer">
                        <FaGithubSquare size={20} />
                    </a>
                    <a href="http://linkedin.com/damassa" target='_blank' rel="noreferrer">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;