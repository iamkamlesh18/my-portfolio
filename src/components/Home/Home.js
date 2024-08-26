import React from 'react';
import './Home.css';
import web2Image from '../img/web2.png'; // Import the image correctly

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <img
                    src={web2Image}
                    alt="3D Business Elements Digital Illustrator"
                    loading="lazy"
                    className="home-image"
                />

                <div className="text-content">
                    <h1 className="home-heading">Welcome to My Portfolio</h1>
                    <p className="home-intro">
                        I am Kamlesh Patil, a passionate developer specializing in modern web technologies 
                        like React, Angular, and Node.js. Explore my projects, blog, 
                        and more to see how I can help bring your digital ideas to life.
                    </p>
                </div>
            </div>

           
        </div>
    );
};

export default Home;
