/* import of styles */
import "./Nomatch.css";
/* import Link in react-router-dom */
import { Link } from "react-router-dom";

export default function Nomatch() {
  return (
    <div className="nomatch">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="backhome">Retourner sur la page d'accueil</Link>
    </div>
  );
}
