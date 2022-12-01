import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Nomatch from './pages/Nomatch/Nomatch';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import SharedLayout from './pages/SharedLayout/SharedLayout';
import Location from './pages/Location/Location';

import logements from './data/logements.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Router>
     <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home logements={logements}/>} />
        <Route path='/:id' element={<Location logements={logements} /> } />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Nomatch />} />
      </Route>
     </Routes>   
</Router>
</>,
  document.getElementById("root") 
);


reportWebVitals();
