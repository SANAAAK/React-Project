import React from "react";
import {Link} from "react-router-dom";
import '../styles/Home.css'
import BannerImage from '../assets/Backgroundimg.jpg'
function Home() {
    return (
    <div className="home" style={{backgroundImage:`url(${BannerImage})` }}>
        <div className="headerContainer">
            <h1>Snoap Bath And Beauty</h1>
            <p>Safe soap, delivered to your door.</p>
           <Link to="/product">
            <button>SHOP NOW</button>
            </Link>
        </div>
    </div>
    );
}
export default Home;