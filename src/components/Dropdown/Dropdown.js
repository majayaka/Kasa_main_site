/* Import of useState to use State Hook */ 
import { useState } from 'react';
import './Dropdown.css';

export default function Dropdown({ txt, title, txtArray }) {
    const [open, setOpen] = useState(false);
    /* initialize "Open" (the state variable) to false. 
    And "setOpen"  callback function that updates the state (true or false in this case) */
    return open ? (
        <div>
            <button 
            type="button"
            className="dropdown__btn"
            onClick={() => setOpen(false)}>
                { /* At the click, set the reverse of the current state of "Open" with the fonction setOpen */}
                <div className="button-content">
                    <span>{title}</span>
                    <img src="/images/chevron-up.png" alt="chevron-up" />
                </div>
            </button> { /* If it's txtArray(equipements), map txtArray and render in p*/}
            {txtArray ? (
                <div className="dropdown__list">
                    {txtArray.map((txt, e) => ( 
                        <p className="dropdown_p-array" key={e}>
                            {txt}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="dropdown_p">{txt}</p> /* If it's not txtArray(equipements), render txt(description) in p*/
            )}
        </div>
    ) : ( /*if "Open" is true (= dropdown not open), render below */
        <button
        type="button"
        className="dropdown__btn"
        onClick={() => setOpen(true)}>
            <div className="button-content">
                <span>{title}</span>
                <img src="/images/chevron-down.png" alt="chevron-down" />
            </div>
        </button>
    );
}
