import './Stars.css';

const Stars = ({props}) => {

    const scaleValue = props.scaleValue;
    const stars = [1, 2, 3, 4, 5];

return (
    <div className='stars'>
        {stars.map((rangeElem) => 
        scaleValue <= rangeElem ? 
        <img key={rangeElem.toString()} className="fullStar" src="/public/images/stars.png" alt="star" />
        : <img key={rangeElem.toString()} className="emptyStar" src="/public/images/star-empty.png" alt="star" />
        )}
    </div>
    )
}

export default Stars;
