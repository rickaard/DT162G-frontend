import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

import Toolbar from './admin-components/Toolbar';
import Footer from '../components/Footer';
import AdminTable from './admin-components/AdminTable';

import './AdminPage.scss';

const AdminPage = () => {
    const [view, setView] = useState('');
    const history = useHistory();


    const handleLogOut = () => {
        localStorage.clear();
        history.push("/snusdatabasen/");
    }

    const handleView = viewArg => {
        setView(viewArg);
    }


    const tableContent = viewState => {
        if (viewState === '') return;
        if (viewState === 'pending') {
            return <div className="content-wrapper">
                        <h3>Väntar på godkännande</h3>
                        <AdminTable status={'1'}/>
                    </div>
        }
        if (viewState === 'approved') {
            return <div className="content-wrapper">
                        <h3>Redan godkända</h3>
                        <AdminTable status={'2'}/>
                    </div>
        }
        if (viewState === 'denied') {
            return <div className="content-wrapper">
                        <h3>Nekade</h3>
                        <AdminTable status={'3'}/>
                    </div>
        }
    };



    return (
        <div className="admin-container">
            <div className="admin-menubar">
                <h1 className="header-title"><Link to="/snusdatabasen/">Snusdatabasen</Link></h1>
                <button onClick={handleLogOut}>Logga ut</button>
            </div>

            <main className="admin-content">
                <Toolbar handleView={handleView} />
                
                {tableContent(view)}
            </main>

            
            <Footer />
        </div>

        

    )
}

export default AdminPage;