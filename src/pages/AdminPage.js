import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeh, faFrown, faSmile } from '@fortawesome/free-solid-svg-icons'


import Footer from '../components/Footer';

import './AdminPage.scss';

const AdminPage = () => {
    const [snusData, setSnusData] = useState([]);
    const [view, setView] = useState('');

    const history = useHistory();

    const handleLogOut = () => {
        localStorage.clear();
        history.push("/");
    }

    useEffect(() => {
        //
    }, [])

    return (
        <div className="admin-container">
            <div className="admin-menubar">
                <h1 className="header-title">Snusdatabasen</h1>
                <button onClick={handleLogOut}>Logga ut</button>
            </div>

            <div className="admin-toolbar">
                <span className="admin-icon waiting"><FontAwesomeIcon icon={faMeh}/></span>
                <span className="admin-icon approved"><FontAwesomeIcon icon={faFrown}/></span>
                <span className="admin-icon denied"><FontAwesomeIcon icon={faSmile}/></span>
            </div>

            <div className="admin-content">
                <div>blablablabkla</div>
            </div>
            
            <Footer />
        </div>

    )
}

export default AdminPage;