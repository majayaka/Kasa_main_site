import { useState } from 'react';
import './Dropdown.css';

export default function Dropdown({ txt, title, txtArray }) {
    const [open, setOpen] = useState(false);

    return open ? (
        <div>
            <button 
            type="button"
            className="dropdown__btn"
            onClick={() => setOpen(false)}>
                <div className="button-content">
                    <span>{title}</span>
                    <img src="/images/chevron-up.png" alt="chevron-up" />
                </div>
            </button>
            {txtArray ? (
                <div className="dropdown__list">
                    {txtArray.map((txt, e) => (
                        <p className="dropdown_p-array" key={e}>
                            {txt}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="dropdown_p">{txt}</p>
            )}
        </div>
    ) : (
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
