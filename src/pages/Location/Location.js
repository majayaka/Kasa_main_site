/* Import this hook to get the id of data, logements.json */
import { useParams } from 'react-router-dom';

/* Import of data of logements.json */
import logements from '../../data/logements.json';

/* Import of style */
import './Location.css';

/* Importing child components */
import Stars from '../../components/Stars/Stars';
import Slider from '../../components/Slider/Slider';
import Dropdown from '../../components/Dropdown/Dropdown';
import Host from '../../components/Host/Host';

/* Import of 404 page */
import Nomatch from '../Nomatch/Nomatch';

/* The parent function component Location that calls the child function components*/
function Location() {
    /* The hook useParams() to get the id of the logement in the url */  
    const params = useParams();
    /* The filter() method to filter logements data to retrive the id of apparts 
    whose the one given in the url parameter, then pop() method removes the last element
    from an array and returns that element*/
    const location = logements.filter((data) => data.id === params.id).pop();
        
    if (location === undefined) {
        return <Nomatch />; 
    /* if it's undefined, page 404 */ 
    }
    
    return (       
            <div className='location-section'>
                <Slider pictures={location.pictures}/> {/* The child component Slider, and "pictures" in data "logement" as "location" */}
                <div className='presentation'>
                    <div className='section-title'>
                        <h1 className='section-title_subt'>{location.title}</h1> {/* Using "title" in "location" */}
                        <p className='section-title_loc'>{location.location}</p> {/* Using "location" in "location" */}
                        <ul className='taglist'> {/* Map "tags" in "location", and render in form in string into li  */}
                            {(location.tags).map(tag => (
                                <li key={tag.toString()}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='section-right'>
                        <div className='section-host'>
                                <Host host={location.host} /> {/* The child component Host, and "host" in "location" */}
                        </div>
                            <div className="host-rating">
                                <Stars starsFillNbr={location.rating} /> {/* The child component Stars, and "rating" in "location" */}
                            </div>
                    </div>
                </div>   
                    <div className="section-dropdown">
                        <div className="drop__down"> 
                           <Dropdown
                              title={"Description"}
                              txt={location.description}
                           />{/* The child component Dropdown, and title prop and txt prop in Dropdown, 
                                "description" in "location" */}
                        </div>
                        <div className="drop__down">
                           <Dropdown
                              title={"Équipements"}
                              txtArray={location.equipments}
                           />{/* The child component Dropdown, and title prop and txt prop in Dropdown, 
                                 "equipements" in "location" */}
                        </div>
                    </div>
                </div>
    );
}

export default Location;
            