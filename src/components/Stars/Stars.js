import PropTypes from 'prop-types';
// import './Stars.css';

export default function Stars ({props})  {

    const stars = [1, 2, 3, 4, 5];

return (
    <div className='stars'>
        {stars.map((rangeElem) => 
        props >= rangeElem ? 
        <img key={rangeElem.toString()} className="fullStar" src="/public/images/stars.png" alt="star" />
        : <img key={rangeElem.toString()} className="emptyStar" src="/public/images/star-empty.png" alt="star" />
        )}
    </div>
    )
}

Stars.propTypes = {
    props: PropTypes.number,
};

Stars.defaultProps = {
    props: null,
};



