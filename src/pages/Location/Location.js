import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import './Location.css';

import Stars from '../../components/Stars/Stars';
import Slider from '../../components/Slider/Slider';
import Dropdown from '../../components/Dropdown/Dropdown';
import Host from '../../components/Host/Host';

import Nomatch from '../Nomatch/Nomatch';


function Location() {
    const params = useParams();
    const location = logements.filter((data) => data.id === params.id).pop();
        
    if (location === undefined) {
        return <Nomatch />;
    }
    
    return (
            <div className='location-section'>
                <Slider pictures={location.pictures}/> 
                <div className='presentation'>
                    <div className='section-title'>
                        <h1 className='section-title_subt'>{location.title}</h1>
                        <p className='section-title_loc'>{location.location}</p>
                        <ul className='taglist'>
                            {(location.tags).map(tag => (
                                <li key={tag.toString()}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='section-right'>
                        <div className='section-host'>
                                <Host host={location.host} />
                        </div>
                            <div className="host-rating">
                                <Stars starsFillNbr={location.rating} />
                            </div>
                    </div>
                </div>   
                    <div className="section-dropdown">
                        <div className="drop__down">
                           <Dropdown
                              title={"Description"}
                              txt={location.description}
                           />
                        </div>
                        <div className="drop__down">
                           <Dropdown
                              title={"Équipements"}
                              txtArray={location.equipments}
                           />
                        </div>
                    </div>
                </div>
    );
}

export default Location;
            