/* Import of React Router for... */
import { Routes, Route } from 'react-router-dom';
/* Import of pages */
import Nomatch from './pages/Nomatch/Nomatch';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import SharedLayout from './pages/SharedLayout/SharedLayout';
import Location from './pages/Location/Location';
/* Import of data of apartments */
import logements from './data/logements.json';

  
export default function App () {
  return (
     <Routes> {/*Import of routes. The path and element is the returned component. */}
      <Route path='/' element={<SharedLayout />}> {/* At the top of each route, we put "SharedLayout" including the header and the footer */}
        <Route index element={<Home logements={logements}/>} />
        <Route path='/location/:id' element={<Location /> } />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Nomatch />} />
      </Route>
     </Routes>
  )
}
