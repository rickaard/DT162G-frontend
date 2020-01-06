import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import useModal from 'use-react-modal';


import Toolbar from './admin-components/Toolbar';
import Footer from '../components/Footer';
import AdminTable from './admin-components/AdminTable';

import './AdminPage.scss';

const AdminPage = () => {
    const { isOpen, openModal, closeModal, Modal } = useModal({background: 'rgba(0, 0, 0, 0.5)'});
    const [snusData, setSnusData] = useState([]);
    const [view, setView] = useState('');

    const history = useHistory();

    const handleLogOut = () => {
        localStorage.clear();
        history.push("/");
    }

    useEffect(() => {
        console.log('state view: ',view);
    }, [view])

    const ModalStyle = {
        background: '#FFF',
        padding: '2em'
    };

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
                <h1 className="header-title">Snusdatabasen</h1>
                <button onClick={handleLogOut}>Logga ut</button>
            </div>

            <main className="admin-content">
                <Toolbar handleView={handleView}/>
                
                {/* <div>
                    <button onClick={openModal}>Open me!</button>
                </div> */}
                {tableContent(view)}
            </main>

            
            <Footer />
            {isOpen && (
                <Modal>
                    <div style={ModalStyle}>
                        <button onClick={closeModal}>close</button>
                        <p>Hej hej hje hje hemskt mycket hej</p>
                    </div>
                </Modal>
            )}
        </div>

        

    )
}

export default AdminPage;