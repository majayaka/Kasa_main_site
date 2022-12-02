import './Card.css';

export default function Card({ cover, title }) {
  return (
    <div className="card">
        <h2 className="title">{title}</h2>
        <img src={cover} alt={title} />
    </div>
  );
}
