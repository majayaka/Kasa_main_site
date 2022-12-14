/* Importing child component */
import Card from "../Card/Card";

/* Importing of style */
import "./CardList.css";


export default function CardList({logements}) {
  return (
    <div className="card-list"> {/* Map "logements" and render only "id", "cover" and "title" into each cards */}
      {logements.map(({ id, title, cover }) => ( 
        <Card 
              title={title}
              cover={cover} 
              link={`/location/${id}`} 
              key={id}
        /> 
      ))} {/* Redirect to the path above with the variable as parameter (as defined in Card.js) */}
    </div>
  );
}



