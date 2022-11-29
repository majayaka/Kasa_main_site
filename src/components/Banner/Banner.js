import bannerImage from '../images/banner.png';


const Banner = () => {
    return (
        <div className="banner">
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={bannerImage} alt="banner" />
        </div>
    )
}

export default Banner;