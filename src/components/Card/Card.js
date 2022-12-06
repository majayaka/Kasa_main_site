import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ cover, title, link }) {
  return (
   <Link to={link}>
    <div className="card">
        <h2 className="title">{title}</h2>
        <img src={cover} alt={title} />
    </div>
    </Link>
  );
}
