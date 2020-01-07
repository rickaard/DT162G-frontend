import React from 'react'
import Footer from '../components/Footer';
import './About.scss';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="header-title"><Link to="/">Snusdatabasen</Link></h1>
            <div className="about-content">
                <h3>Välkommen till Snusdatabasen!</h3>
                <div className="info-text">
                    <p>På denna sida kan du hitta och jämföra dina favoritsnuser med varandra. Hjälp mig gärna att fylla databasen med de snuser som fattas.</p>
                    <p><Link to="add-snus">Här</Link> kan du enkelt lägga till snuser. De dyker upp på sidan så fort någon administratör har godkänt dem.</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
