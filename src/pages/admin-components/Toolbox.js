import React from 'react'

const Toolbox = props => {
    return (
        <div className={`admin-toolbox ${props.colorScheme}`} onClick={() => props.handleView(props.status)}>
            <div className="toolbox-icon">
                <img 
                    src={props.icon}
                    alt={`${props.icon} icon`}
                />
            </div>
            <div className="toolbox-status">
                <span>{props.status}</span>
            </div>
        </div>
    )
}

export default Toolbox
