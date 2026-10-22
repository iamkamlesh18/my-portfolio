import React from 'react';
import Routing from './components/Routing/Routing';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className="app-root">
            <div className="main-content">
                <Routing />
            </div>
            <Footer />
        </div>
    );
}

export default App;
