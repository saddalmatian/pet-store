import './Home.css';
import HomeImage from './HomeImage';
import HomeBtn from './HomeBtn';
import HomeContent from './HomeContent';

function Home() {
    return (
        <div className="container home">
            <div className="row">
                <div className="col-md ms-5 ps-5 d-md-flex justify-content-center flex-column">
                    <HomeContent />
                    <div className="d-md-flex">
                        <div className="col-md-4">
                            <HomeBtn title="Shop now"/>
                        </div>
                        <div className="col-md-3">
                            <HomeBtn title="Pet Services"/>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <HomeImage />
                </div>
            </div>
        </div>
    );
}

export default Home;