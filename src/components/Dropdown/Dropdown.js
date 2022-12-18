/* Import of useState to use State Hook */ 
import { useState } from 'react';
import './Dropdown.css';

export default function Dropdown({ txt, title, txtArray }) {
    const [isOpen, setIsOpen] = useState(false);
    /* initialize "isOpen" (the state variable) to false. 
    And "setIsOpen" is the callback function that updates the state (true or false in this case) */
    return isOpen ? (
        <div>
            <button 
            type="button"
            className="dropdown__btn"
            onClick={() => setIsOpen(false)}>
                { /* At the click, set the reverse of the current state of "isOpen" with the fonction setIsOpen */}
                <div className="button-content">
                    <span>{title}</span>
                    <img src="/images/chevron-up.png" alt="chevron-up" />
                </div>
            </button> { /* in Location.js, if it's txtArray(equipements), map txtArray and render in p*/}
            {txtArray ? (
                <div className="dropdown__list">
                    {txtArray.map((txt, e) => ( 
                        <p className="dropdown_p-array" key={e}>
                            {txt}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="dropdown_p">{txt}</p> /* in Location.js, if it's not txtArray(equipements), render txt(description) in p*/
            )}
        </div>
    ) : ( /*if "isOpen" is true (= dropdown not open), render below */
        <button
        type="button"
        className="dropdown__btn"
        onClick={() => setIsOpen(true)}>
            <div className="button-content">
                <span>{title}</span>
                <img src="/images/chevron-down.png" alt="chevron-down" />
            </div>
        </button>
    );
}
