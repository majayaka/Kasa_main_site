import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/">
       <img src="/images/logo-blanc.png" alt="Logo footer" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
