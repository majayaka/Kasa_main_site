import PropTypes from 'prop-types';
// import '../styles/Tag.css';

export default function Tag({ children }) {
    // to replace break line by space
    return <span className="tag">{children.replaceAll(' ', '\u00a0')}</span>;
    }

Tag.propTypes = {   
    children: PropTypes.string,
};

Tag.defaultProps = {
    children: null,
};


