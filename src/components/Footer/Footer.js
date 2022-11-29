import React from 'react';
import './Footer.css';
import footerLogo from '../images/logo-blanc.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/">
       <img src={footerLogo} alt="Logo footer" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
