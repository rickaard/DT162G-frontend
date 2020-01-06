import React from 'react'
import AdminTableHead from './AdminTableHead';
import AdminTableRow from './AdminTableRow';

const AdminTable = props => {
    return (
        <table>
            <AdminTableHead />
            <AdminTableRow status={props.status}/>
        </table>
    )
}

export default AdminTable
