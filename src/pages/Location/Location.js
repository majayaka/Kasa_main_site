import { useParams } from 'react-router-dom';
import { useState } from 'react';

import './Location.css';

function Location ({logements}) {
  const param = useParams();
  const [logement] = useState(logements.find(logement => logement.id === param.id));

  return (
    <div>
      {logement != null && (
                <div className='body_location'>

                    {/* <Gallery photo/>  */}

                    <div className='presentation'>
                        <div className='title'>
                            <h1>{logement.title}</h1>
                            <span>{logement.location}</span>
                        </div>
                        <ul className='list_tags'>
                            {(logement.tags).map(tag => (
                                <li key={tag.toString()}>{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='star_rating'>
                        <div className='host_profile'>
                            <span>{(logement.host).name}</span>
                            <img src={(logement.host).picture} alt="profile" />
                        </div>
                        <ul className='list_start'>
                            {stars.map((_, index) => (
                                <li key={index}>
                                    {/* <{stars?}/> */}
                                </li>
                            ))}
                        </ul>
                    </div>
    </div>
   