import React from 'react'

import TableHead from './TableHead';
import TableRow from './TableRow';

import './Table.scss';

const Table = () => {

    return (
        <div className="table-wrapper">
            <table>
                <TableHead />
                <TableRow/>
                <TableRow/>
            </table>
        </div>
    )
}

export default Table
