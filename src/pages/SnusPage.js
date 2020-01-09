import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './SnusPage.scss';
import snusLogo from '../assets/snus.svg';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

const SnusPage = props => {
    const { id } = useParams();
    const [snusData, setSnusData] = useState(undefined);

    useEffect(() => {
        fetch(process.env.REACT_APP_PUBLIC_API_URL+id)
        .then(resp => {
            if (!resp.ok) throw new Error(resp.status);
            else return resp.json();
        })
        .then(data => {
            setSnusData(data[0]);
        })
        .catch(err => console.log('errerr',err))
    }, [id])

    return (
        <div>
            
            <div className="snuspage-container">
                <h1 className="header-title"><Link to="/snusdatabasen/">Snusdatabasen</Link></h1>
                {!snusData ? <div className="snus-content"><span>Ingen snus det ID:t</span></div> :
                <div className="snus-content">
                    <img 
                        src={snusLogo}
                        alt='Bild på snus'
                    />
                    <div className="snus-pair">
                        <span>Produktmärke</span>
                        <h1>{snusData.brand}</h1>
                    </div>
                    <div className="snus-pair">
                        <span>Produkttyp</span>
                        <h2>{snusData.product}</h2>
                    </div>
                    <div className="snus-pair">
                        <span>Snustyp</span>
                        <p>{snusData.snusType}</p>
                    </div>
                    <div className="snus-pair">
                        <span>Nikotinhalt</span>
                        <p>{snusData.nicotineAmount}</p>
                    </div>
                    <div className="snus-pair">
                        <span>Innehåll/förp</span>
                        <p>{snusData.amountPerBox}</p>
                    </div>
                    <div className="snus-pair">
                        <span>Producent</span>
                        <p>{snusData.producer}</p>
                    </div>
                    <div className="snus-pair">
                        <span>Övrigt:</span>
                        <p>{snusData.misc}</p>
                    </div>
                </div>
                }
                
            </div>
            <Footer />
        </div>
    )
}

export default SnusPage
