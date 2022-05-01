import React from 'react';
import './Home.css';
import HomeImage from './HomeImage';
import HomeBtn from './HomeBtn';
import HomeContent from './HomeContent';
import Header from '../Header/Header';


function Home() {
    return (
        <>
            <Header />
            <div className="container home">
                <div className="row">
                    <div className="col-md ms-5 ps-5 d-md-flex justify-content-center flex-column">
                        <HomeContent />
                        <div className="d-md-flex">
                            <HomeBtn href="/product" title="Sản phẩm" />
                            <HomeBtn href="/service" title="Dịch vụ" />
                        </div>
                    </div>
                    <div className="col-md">
                        <HomeImage />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;