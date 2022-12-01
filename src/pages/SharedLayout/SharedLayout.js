import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./SharedLayout.css";



function Home({logements}) {
  return (
    <div className="shared">
    <Header />
     <Outlet />
    <Footer />
    </div>
  );
}

export default Home;