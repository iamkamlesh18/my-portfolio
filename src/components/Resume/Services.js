import './Services.css';

import React from 'react';


const Services = () => {
    return (
        <div className="services">
           <section className="services">
                <h2 className="services-heading">Services</h2>
                <div className="service-list">
                    <div className="service-item">
                        <h3>Web Development</h3>
                        <p>Creating responsive, high-performance websites using the latest web technologies.</p>
                    </div>
                    <div className="service-item">
                        <h3>UI/UX Design</h3>
                        <p>Designing intuitive and engaging user interfaces that provide an exceptional user experience.</p>
                    </div>
                    <div className="service-item">
                        <h3>Full-Stack Development</h3>
                        <p>Building robust and scalable applications from the ground up, both front-end and back-end.</p>
                    </div>
                    <div className="service-item">
                        <h3>Consulting</h3>
                        <p>Providing expert advice on digital strategy, technology choices, and project planning.</p>
                    </div>
                    <div className="service-item">
                        <h3>Digital Marketing</h3>
                        <p>Crafting strategies that boost online visibility, drive traffic, and convert leads into loyal customers.</p>
                    </div>

                    <div className="service-item">
                        <h3>Graphic Designing</h3>
                        <p>Creating visually compelling designs that effectively communicate your brand's message and captivate audiences.</p>
                    </div>

                    <div className="service-item">
                        <h3>Content Writing</h3>
                        <p>Delivering crisp, engaging content tailored to resonate with your target audience and enhance your brand voice.</p>
                    </div>

                    <div className="service-item">
                        <h3>Social Media Handling</h3>
                        <p>Managing and optimizing your social media presence to build stronger connections and grow your community.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Services;