/* Import of Style */
import './Card.css';

import { Link } from 'react-router-dom';

export default function Card({ cover, title, link }) {
  return (
   <Link to={link}>{/* Redirect to the path as defined in cardlist.js */}
      <div className="card">
          <h2 className="title">{title}</h2>{/* Render "title" and "cover" from the props*/}
          <img src={cover} alt={title} />
      </div>
   </Link>
  );
}
