import './Home.css';
import web2Image from '../img/web2.png';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content home-flex">
                <div className="home-image-wrap">
                    <img src={web2Image} alt="3D Business" className="home-image" />
                </div>

                <div className="text-content">
                    <h1 className="home-heading">Hi 👋 I am Kamlesh Patil</h1>
                    <p className="home-intro">
                        Salesforce Developer | Admin → DevOps | Apex | LWC | Flows | OmniStudio | CPQ
                    </p>

                    <div className="home-card">
                        <p>
                            Senior Software Engineer (Salesforce) at Capgemini. I build scalable, enterprise-grade
                            CRM solutions using Apex, Lightning Web Components, Flows, and integrations. Currently
                            focusing on OmniStudio & CPQ.
                        </p>
                        <ul className="home-meta">
                            <li>📧 patilkamlesh1811@gmail.com</li>
                            <li>📞 +91-7770000347</li>
                            <li>🔭 Learning: OmniStudio & CPQ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
