import './HomeImage.css';
import HomeImg from '../../assets/images/img-home.png'

function HomeImage() {
    return (
        <>
            <img className="img-fluid home-img" alt="home-img" src={HomeImg} />
        </>
    );
}

export default HomeImage;