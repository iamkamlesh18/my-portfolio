import React from 'react';
import './Home.css';
import web2Image from '../img/web2.png'; // Import the image correctly

const Home = () => {
    return (
        <div className="home">
            <img
                src={web2Image}
                alt="3D Business Elements Digital Illustrator"
                loading="lazy"
                srcSet={`${web2Image} 702w, images/15ba2b27386c4ef07f1c95b28690a151.png 422w`}
                sizes="(max-width: 375px) 91.46666667vw, (min-width: 375.05px) and (max-width: 480px) 92.98224839vw, (min-width: 480.05px) and (max-width: 768px) 58.11390524vw, (min-width: 768.05px) and (max-width: 1024px) 43.58542893vw, (min-width: 1024.05px) 32.67311803vw"
                className="home-image"
            />
        </div>
    );
};

export default Home;
