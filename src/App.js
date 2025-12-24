import React from 'react';
import Routing from './components/Routing/Routing';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className="app-root">
            <main className="main-content">
                <Routing />
            </main>

            {/* Footer must be here */}
            <Footer />
        </div>
    );
}

export default App;
