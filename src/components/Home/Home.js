import './Home.css';
// If you have an image for Salesforce theme, place it in src/components/img and import here
// import salesforceImage from '../img/salesforce.png';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <div className="text-content">
                    <h1 className="home-heading">Hi 👋 I am Kamlesh Patil</h1>
                    <p className="home-intro">
                        Salesforce Developer | Salesforce Admin → DevOps | Apex | LWC | Flows | OmniStudio | CPQ
                    </p>
                    <p>
                        Senior Software Engineer (Salesforce) at Capgemini. I build scalable, enterprise-grade
                        CRM solutions using Apex, Lightning Web Components, Flows, and integrations. Currently
                        focusing on OmniStudio & CPQ.
                    </p>
                    <p>
                        Contact: patilkamlesh1811@gmail.com • +91-7770000347
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
