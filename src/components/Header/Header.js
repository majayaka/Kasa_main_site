import React from "react";
import "./Header.css";
import logo from "../images/logo-couleur.png";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
    
  );
}
