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
                status='pending'
                handleView={props.handleView}
            />
            <Toolbox
                colorScheme='green'
                icon={approvedIcon}
                status='approved'
                handleView={props.handleView}
            />
            <Toolbox
                colorScheme='red'
                icon={deniedIcon}
                status='denied'
                handleView={props.handleView}
            />
        </div>
    )
}

export default Toolbar
