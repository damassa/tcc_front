import React from 'react';
import './style.css';
import Gorenger from '../../assets/images/Gorenger.jpg';

const SerieCard: React.FC = () => {
    return (
        <div className='card'>
            <img src={Gorenger} alt="Serie" />
        </div>
    );
}

export default SerieCard;