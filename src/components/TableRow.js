import React, { useState, useEffect } from 'react'

const initTable = {
    brand: '',
    product: '',
    snusType: '',
    nicotineAmount: '',
    amountPerBox: '',
    producer: '',
    misc: ''
}

const TableRow = props => {
    const [snusValue, setSnusValue] = useState(['Välj snus att jämföra'])
    const [snus, setSnus] = useState([]);
    const [snusTable, setSnusTable] = useState(initTable);

    useEffect( () => {
        fetch('http://localhost:3001/api/snus/')
        .then(res => res.json())
        .then(data => {
            data.snus.map(element => setSnusValue(snusValue => [...snusValue, `${element.brand} ${element.product}`]));
            setSnus(data.snus);
        })
        .catch(err => console.log(err))
    }, [])


    const handleSelectChange = event => {
        if (event.target.value === '0') {
            setSnusTable(initTable);
            return;
        };
        handleTableChange(event.target.value-1);
    }

    const handleTableChange = index => {
        setSnusTable({
            brand: snus[index].brand,
            product: snus[index].product,
            snusType: snus[index].snusType,
            nicotineAmount: snus[index].nicotineAmount,
            amountPerBox: snus[index].amountPerBox,
            producer: snus[index].producer,
            misc: snus[index].misc
        })
    }

    const snusOptions = snusValue.map((snus, index) => {
        return <option value={index} key={index}>{snus}</option>
    })

    return (
        <tbody>
        <tr>
            <td>
                <select onChange={event => handleSelectChange(event)}>                  
                    {snusOptions}
                </select>
            </td>
            <td>{snusTable.brand}</td>
            <td>{snusTable.product}</td>
            <td>{snusTable.snusType}</td>
            <td>{snusTable.nicotineAmount}</td>
            <td>{snusTable.amountPerBox}</td>
            <td>{snusTable.producer}</td>
            <td>{snusTable.misc}</td>
        </tr>
        </tbody>
    )
}

export default TableRow
