import './HomeImage.css';
import HomeImg from '../../assets/images/img-home.png'

function HomeImage() {
    return (
        <div className="col-md">
            <img className="img-fluid home-img" alt="home-img" src={HomeImg} />
        </div>
    );
}

export default HomeImage;