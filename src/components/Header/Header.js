import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/images/logo-couleur.png" alt="logo Kasa" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
    
  );
}
