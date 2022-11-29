import './Home.css';
import Banner from '../../components/Banner/Banner';
import CardList from '../../components/CardList/CardList';


function Home({logements}) {
  return (
    <div className="home-frame">
      <Banner />
      <CardList logements={logements}/>
    </div>
  );
}

export default Home;

