import React from 'react'
import Toolbox from './Toolbox';

import approvedIcon from '../../assets/approved.png';
import deniedIcon from '../../assets/denied.png';
import pendingIcon from '../../assets/pending.png';

const Toolbar = props => {


    return (
        <div className="admin-toolbar">
            <Toolbox 
                colorScheme='blue'
                icon={pendingIcon}
                amount='8'
                status='pending'
                handleView={props.handleView}
                // onClick={() => props.handleView('pending')}
            />
            <Toolbox
                colorScheme='green'
                icon={approvedIcon}
                amount='45'
                status='approved'
                handleView={props.handleView}
                // onClick={() => props.handleView('approved')}
            />
            <Toolbox
                colorScheme='red'
                icon={deniedIcon}
                amount='6'
                status='denied'
                handleView={props.handleView}
                // onClick={() => props.handleView('denied')}
            />
        </div>
    )
}

export default Toolbar
