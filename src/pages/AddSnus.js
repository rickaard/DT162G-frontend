import React from 'react'
import AddSnusForm from '../components/AddSnusForm';
import Footer from '../components/Footer';

import './AddSnus.scss';

const AddSnus = () => {
    return (
        <div className="subpage-container">
            <h1 className="header-title">Snusdatabasen</h1>
            <div className="info-text">
                <p> Hjälp gärna till att fylla upp databasen genom att lägga till snuser som inte redan finns tillagda.
                    Fyll i så mycket du kan, men minst de fält som är markerade med stjärna. 
                </p>
            </div>
            <AddSnusForm />
            <Footer />

        </div>
    )
}

export default AddSnus
