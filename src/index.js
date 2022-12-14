import ReactDOM from 'react-dom/client';
/* Import of React Router for... */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
/* Import of pages */
import Nomatch from './pages/Nomatch/Nomatch';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import SharedLayout from './pages/SharedLayout/SharedLayout';
import Location from './pages/Location/Location';
/* Import of data of apartments */
import logements from './data/logements.json';

/* Render React to html with the div "root"
, then put this snippet in a constant */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/* generate the components with render method */
<Router>
     <Routes> {/*Import of routes. The path and element is the returned component. */}
      <Route path='/' element={<SharedLayout />}> {/* At the top of each route, we put "SharedLayout" including the header and the footer */}
        <Route index element={<Home logements={logements}/>} />
        <Route path='/location/:id' element={<Location /> } />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Nomatch />} />
      </Route>
     </Routes>   
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
