import React from "react";
import LatestPostsSlider from "../parts/LatestPostSlider";
import './Home.css';

const Home = () => {
    return (
        <div className="slider-banner">
            {/* Slider Banner Section 
            <img src="img/banner.jpg" alt="Slider Banner" className="banner-image" />  */}
            <LatestPostsSlider className="latest-posts-slider" />
        </div>
    );
    }

export default Home;