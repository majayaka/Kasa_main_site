import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./CardList.css";


export default function CardList({logements}) {
  return (
    <div className="card-list">
      {logements.map(({ id, title, cover }) => (
        <Link to={`/location/${id}`}>
        <Card 
              title={title}
              cover={cover} 
        />
        </Link>
      ))}
    </div>
  );
}



