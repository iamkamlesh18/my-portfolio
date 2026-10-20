import { useEffect, useState } from 'react';
import './Home.css';
import web2Image from '../img/web2.png';

const roles = [
    'Senior Software Engineer | SDET | Automation Test Engineer',
    'Java · Selenium · Serenity BDD · Cucumber · REST Assured'
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
                        alt="Illustration of an engineer working at a computer"
                        className="home-image"
                    />
                </div>

                <div className="text-content">
                    <h1 className="home-heading">
                        Kamlesh Patil
                    </h1>

                    <p className="typing-text">
                        {text}
                        <span className="cursor">|</span>
                    </p>

                    <div className="home-card">
                        <p>
                            Senior Software Engineer and SDET at Capgemini with 4+ years of
                            experience in automation testing and quality engineering. I build
                            reliable UI and API automation for enterprise applications using
                            Java, Selenium WebDriver, Serenity BDD, Cucumber and REST Assured.
                        </p>

                        <div className="home-social">
                            <a href="https://www.linkedin.com/in/iamkamlesh18/" target="_blank" rel="noopener noreferrer">
                                🔗 LinkedIn
                            </a>
                            <a href="https://github.com/iamkamlesh18" target="_blank" rel="noopener noreferrer">
                                💻 GitHub
                            </a>
                            <a href="https://www.youtube.com/channel/UCzSKULVwWDGQ5fOHIvoMJrw" target="_blank" rel="noopener noreferrer">
                                ▶️ YouTube
                            </a>
                            <a href="https://www.instagram.com/thekalp_18n/" target="_blank" rel="noopener noreferrer">
                                📸 Instagram
                            </a>
                            <a href="https://www.salesforce.com/trailblazer/iamkamlesh18" target="_blank" rel="noopener noreferrer">
                                🏅 Trailhead
                            </a>
                        </div>

                        <div className="home-actions">
                            <a
                                href="https://iamkamlesh18.github.io/iamkamlesh18/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="home-btn primary"
                            >
                                View Developer Profile ↗
                            </a>
                            <a
                                href="/my-portfolio/about"
                                className="home-btn secondary"
                            >
                                Explore My Experience
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
