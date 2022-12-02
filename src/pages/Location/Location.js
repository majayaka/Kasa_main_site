import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import './Location.css';

import Stars from '../../components/Stars/Stars';
import Slider from '../../components/Slider/Slider';
// import Dropdown from '../../components/Dropdown/Dropdown';
import Host from '../../components/Host/Host';
// import Tag from '../../components/Tag/Tag';

import Nomatch from '../Nomatch/Nomatch';

function Location() {
    const params = useParams();
    const location = logements.filter((data) => data.id === params.id).pop();
        
    if (location === undefined) {
        return <Nomatch />;
    }
    
    return (
            <div className="location-section">
                <Slider pictures={location.pictures}/> 
                <div className="presentation">
                    <div className="section-title">
                        <h1 className="section-title_subt">{location.title}</h1>
                        <p className="section-title_loc">{location.location}</p>
                        <div className="taglist">
                            {/* {location.tags.map((tag) => (
                                <Tag key={`${tag}`} value={tag} />
                            ))} */}
                        </div>
                    </div>
                    <div className="section-host">
                        <div className="host">
                            <Host name={location.host.name} picture={location.host.picture} />
                            <Stars value={parseInt(location.rating, 10)}/>
                        </div>
                    </div>
                    <div className="section-dropdown">
                        {/* <Dropdown title="Description" text={location.description}/> 
                        <Dropdown title="Equipements" text={location.equipements.join(' ')}/>  */}
                    </div>
                </div>
            </div>
    );
}

export default Location;
            