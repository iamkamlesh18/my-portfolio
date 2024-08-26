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
                    className="home-image"
                />

                <div className="text-content">
                    <h1 className="home-heading">Welcome to My Portfolio</h1>
                    <p className="home-intro">
                        I am Kamlesh Patil, a passionate developer with expertise in modern 
                        web technologies like React, Angular, and Node.js. I specialize in creating 
                        responsive, high-performance websites and applications that deliver an exceptional 
                        user experience. Explore my projects, blog, and services to see how I can help
                        bring your digital ideas to life, whether it's through full-stack development, 
                        UI/UX design, or digital strategy consulting.
                    </p>
                </div>

            </div>

           
        </div>
    );
};

export default Home;
