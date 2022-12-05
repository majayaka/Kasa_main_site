import PropTypes from 'prop-types';
import { useState } from 'react';
import './Slider.css';

function Slider ({ pictures }) {
    const [currentPicture, setCurrentPicture] = useState(0);

    const handleNext = () => {
        if (currentPicture === pictures.length - 1) {
            setCurrentPicture(0);
        } else {
            setCurrentPicture(currentPicture + 1);
        }
    }

    const handlePrevious = () => {
        if (currentPicture === 0) {
            setCurrentPicture(pictures.length - 1);
        } else {
            setCurrentPicture(currentPicture - 1);
        }
    }

    return (
        <div key={currentPicture} className="slider">
            <button onClick={handleNext} className={pictures.length === 1 ? 'btn_none' : 'btn_next'}><img src="/images/chevron-left.png" alt="btn_next" /></button>
            <img className="slider__image" src={pictures[currentPicture]} alt="slider" />
            <button onClick={handlePrevious} className={pictures.length === 1 ? 'btn_none' : 'btn_prev'}><img src="/images/chevron-right.png" alt="btn_prev" /></button>   
        </div>
    );


}

// to avoid error of prop type

Slider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

Slider.defaultProps = {
  pictures: null,
};

export default Slider;