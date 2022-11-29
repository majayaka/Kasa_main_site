import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Nomatch from './pages/Nomatch/Nomatch';
import About from './pages/About/About';
import Home from './pages/Home/Home';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import logements from './data/logements.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Router>
  <Header />
     <Routes>
      <Route path='/' element={<Home logements={logements}/>} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<Nomatch />} />
     </Routes>   
  <Footer />
</Router>
</>,
  document.getElementById("root") 
);


reportWebVitals();
