import PropTypes from 'prop-types'; 
// import './Host.css';

export default function Host({ name, picture }) {
    return (
        <div className="host">
            <div>{name}</div>
            <img src={picture} alt={name} />
        </div>
    );
}

Host.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
};

Host.defaultProps = {
    name: null,
    picture: null,
};


