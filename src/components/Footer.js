import React from 'react'
import {Link} from 'react-router-dom';

import './Footer.scss';
//import rounded picture
import roundedImg from '../assets/rounded_mask.svg';

const Footer = () => {
    return (
        <>
        <footer className="footer">
        <img className="footer-img" src={roundedImg} alt=""/>
            <div className="footer-content">
                <div>
                    <Link to="/">snusdatabasen.se</Link>
                </div>
                <div className="footer-links">
                    <Link to="/add-snus">Lägg till snus</Link>
                    <a href="mailto:rickaard@gmail.com">Kom i kontakt</a>
                    <Link to="/about">Om snusdatabasen</Link>
                </div>
            </div>

        </footer>
        </>
    )
}

export default Footer
