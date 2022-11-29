import Card from "./Card";
import { Link } from "react-router-dom";

export default function CardList({ logements }) {
  return (
    <ul className="card-list">
      {/* {logements.map(({ id, title, cover }) => (
        <Link to={"/rooms/" + id} key={id}>
          <Card 
            cover={cover} 
            title={title}
          />
        </Link> */}
    </ul>
  );
}

