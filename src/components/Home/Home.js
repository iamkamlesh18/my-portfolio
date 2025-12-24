import { useEffect, useState } from 'react';
import './Home.css';
import web2Image from '../img/web2.png';

const roles = [
    'Salesforce Admin → Developer → DevOps → OmniStudio & CPQ',
    'Building scalable, enterprise-grade Salesforce solutions'
];

const Home = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index];
        const speed = isDeleting ? 40 : 70;

        const timeout = setTimeout(() => {
            setText(
                isDeleting
                    ? current.substring(0, charIndex - 1)
                    : current.substring(0, charIndex + 1)
            );

            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

            if (!isDeleting && charIndex === current.length) {
                setTimeout(() => setIsDeleting(true), 1200);
            }

            if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % roles.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <div className="home">
            <div className="home-content home-flex">
                <div className="home-image-wrap">
                    <img
                        src={web2Image}
                        alt="Salesforce Developer Illustration"
                        className="home-image"
                    />
                </div>

                <div className="text-content">
                    <h1 className="home-heading">
                        Kamlesh Patil
                    </h1>

                    {/* Rotating typing text */}
                    <p className="typing-text">
                        {text}
                        <span className="cursor">|</span>
                    </p>

                    <div className="home-card">
                        <p>
                            Senior Software Engineer (Salesforce) at Capgemini with 3+ years of
                            enterprise experience. I build scalable, enterprise-grade Salesforce
                            solutions across Admin, Development, Automation, DevOps, OmniStudio,
                            and CPQ.
                        </p>

                        {/* Contact */}
                        <div className="home-contact">
                            <a href="mailto:patilkamlesh1811@gmail.com" className="contact-item">
                                📧 <span>patilkamlesh1811@gmail.com</span>
                            </a>

                            <a href="tel:+917770000347" className="contact-item">
                                📞 <span>+91&nbsp;7770000347</span>
                            </a>
                        </div>

                        {/* Social */}
                        <div className="home-social">
                            <a href="https://www.linkedin.com/in/iamkamlesh18/" target="_blank" rel="noopener noreferrer">
                                🔗 LinkedIn
                            </a>
                            <a href="https://github.com/iamkamlesh18" target="_blank" rel="noopener noreferrer">
                                💻 GitHub
                            </a>
                            <a href="https://www.instagram.com/thekalpesh9/" target="_blank" rel="noopener noreferrer">
                                📸 Instagram
                            </a>
                            <a href="https://www.facebook.com/itzzmekp" target="_blank" rel="noopener noreferrer">
                                📘 Facebook
                            </a>
                        </div>

                        {/* CTA */}
                        <div className="home-actions">
                            <a
                                href="https://iamkamlesh18.github.io/iamkamlesh18/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="home-btn primary"
                            >
                                View Full CV & Profile ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
