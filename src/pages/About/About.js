/* import of components */
import Dropdown from '../../components/Dropdown/Dropdown';
/* import of text data of About */
import aboutData from '../../data/aboutData.json';

/* import of style */
import "./About.css";

export default function About() {
  return (
    <section className='section-about'>
      <div className='banner-about'>
        <img src="/images/aboutBanner.jpeg" alt="banner" />
      </div>
      <div className="dropdown-about">{/* Map "About" data, 
      and render in Dropdown(title,content)  */}
        {aboutData.map((data, index) => {
          return (
            <Dropdown
              key={index}
              title={data.title}
              txt={data.content}
            />
          );
        })} 
      </div>
    </section>
  );
}