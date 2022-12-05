import PropTypes from 'prop-types';
import './Stars.css';


export default function Stars ({props})  {
    let numStars = props.rating;
    const maxStar = 5;
    const stars = [];

    for (let i = 1; i < maxStar; i++) {
        if (i <= numStars) {
            stars.push(
            <svg key={i} className="active-star" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
            </svg>
            );
        } else { 
            stars.push(
            <svg key={i} xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
            </svg>
            );
        }
    }
    return (
        <div className="stars">
            {stars}
        </div>
    );
}

Stars.propTypes = {
    rating: PropTypes.number.isRequired,
};

