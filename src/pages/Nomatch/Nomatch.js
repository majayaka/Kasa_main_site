import "./Nomatch.css";
import { Link } from "react-router-dom";

export default function Nomatch() {
  return (
    <div className="nomatch">
      <h1>404</h1>
      <p>Ooops! The requested path could not be found.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}
