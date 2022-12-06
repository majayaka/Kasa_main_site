import Card from "../Card/Card";
import "./CardList.css";


export default function CardList({logements}) {
  return (
    <div className="card-list">
      {logements.map(({ id, title, cover }) => (
        <Card 
              title={title}
              cover={cover} 
              link={`/location/${id}`}
        />
      ))}
    </div>
  );
}



