import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';


import './Location.css';
import Stars from '../../components/Stars/Stars';
// import Slider from '../../components/Slider/Slider';
// import Dropdown from '../../components/Dropdown/Dropdown';

import Nomatch from '../Nomatch/Nomatch';

const Location = ()=> {
    
    const {logementId} = useParams();

    const selectedLocation = logements.filter(logement =>{
        if(logement.id === logementId){
            return logement;
        }

        return null;
        });

        if(selectedLocation.length === 1){
            const selectedLocationObject = selectedLocation[0];

            const equipements = () => {
                let equipementKey = 0;

                return selectedLocationObject.equipements.map(equipement => {
                    equipementKey++;
                    return (
                        <li className="equipement" key={equipementKey}>{equipement}></li>
                    )
                })
        }

        const list = equipements();

        const tags = () => {
            let tagKey = 0;
            return selectedLocationObject.tags.map((tag) => {
                tagKey++;
                return(
                    <li className="tag" key={tagKey}>{tag}</li>
                )
            })
        }

        const listTag = tags();


        return (
                <div className="location-section">
                    {/* <Slider />  */}
                    <div className="presentation">
                        <div className="section-title">
                            <h1 className="section-title_subt">{selectedLocationObject.title}</h1>
                            <p className="section-title_loc">{selectedLocationObject.location}</p>
                            <ul className="taglist">{listTag}</ul>
                        </div>
                        <div className="section-host">
                            <div className="host">
                                <p className="host-name">{selectedLocationObject.host.name}</p>
                                <img className="host-pic" src={selectedLocationObject.host.picture} alt={selectedLocationObject.host.name} />   
                            </div>
                            <Stars scaleValue={selectedLocationObject.rating}/>
                        </div>
                    </div>
                    <div className="section-dropdown">
                        <div className="dropdown-description">
                            {/* <Dropdown title="Description" text={selectedLocationObject.description}/> */}
                        </div>
                        <div className="dropdown-equipements">
                            {/* <Dropdown title="Equipements" text={list}/> */}
                        </div>
                    </div>
                </div>
            )}
            else{
                return(
                    <div>
                        <Nomatch />
                    </div>
                )
            }
        }

export default Location;