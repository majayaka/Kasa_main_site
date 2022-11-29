import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CardList from './components/CardList';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="home-frame">
      <Header />
      <Banner />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;

