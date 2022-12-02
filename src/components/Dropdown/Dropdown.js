import PropTypes from 'prop-types';
import { useState } from 'react';
// import './Dropdown.css';

function cleanDescription(description) {
    const array = description.split(' ');

    if (array.length > 1) {
        return array.map((value) => `${value}\n`);
    }

    return description;

}

function Dropdown({ title, description }) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            <button 
            type="button"
            className={open ? "dropdown opened" : "candropdown"}
            onClick={toggle}
            >
            {title}
            </button>
            {open && (
                <div className="dropdown__list">
                    {cleanDescription(description)}
                </div>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

Dropdown.defaultProps = {
    title: null,
    description: null,
};

export default Dropdown;