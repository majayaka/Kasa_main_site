/* Import of style */
import './Home.css';
/* Import of essential components */
import Banner from '../../components/Banner/Banner';
import CardList from '../../components/CardList/CardList';

/* The component of home page, parent component of return */
function Home({logements}) {
  return (
    <div className="home-frame">
      <Banner />
      <CardList logements={logements}/>
    </div>
  );
}

export default Home;

