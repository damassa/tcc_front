import './style.css';
import Gorenger from '../../assets/images/Gorenger.jpg';
import { Serie } from '../../types/serie';

type Props = {
  item: Serie;
};

function SerieCard({ item }: Props) {
  return (
    <div className="serie-card">
      <a href="/detail">
        <img className="d-block w-100" src={Gorenger} alt="Serie" />
      </a>
    </div>
  );
}

export default SerieCard;
