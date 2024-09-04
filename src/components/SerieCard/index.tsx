import React from 'react';
import './style.css';
import Gorenger from '../../assets/images/Gorenger.jpg';

const SerieCard: React.FC = () => {
    return (
        <div className='serie-card'>
            <a href="/detail">
                <img className='d-block w-100' src={Gorenger} alt="Serie" />
            </a>
        </div>
    );
}

export default SerieCard;