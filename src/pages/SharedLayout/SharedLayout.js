/* import Outlet in react-router-dom */
import { Outlet } from "react-router-dom";

/* Import of child components */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



function Home({logements}) {
  return (
    <div className="shared">
    <Header />
     <Outlet />
    <Footer />
    </div>
  );
}

/* "Outlet" to render child route elements to allow nested "header" and "footer"
 to show up when child routes are rendered. */


export default Home;