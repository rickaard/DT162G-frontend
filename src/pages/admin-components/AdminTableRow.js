import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const AdminTableRow = props => {
    const [snusData, setSnusData] = useState(undefined);

    useEffect( () => {
        if (localStorage.getItem("token")) {
            fetch(process.env.REACT_APP_ADMIN_API_URL + props.status, {
                headers: {
                    'auth-token': localStorage.getItem("token")
                }
            })
            .then(res => res.json())
            .then(data => {
                // data.snus.map(element => setSnusValue(snusValue => [...snusValue, `${element.brand} ${element.product}`]));
                setSnusData(data.snus);
                console.log(data);
            })
            .catch(err => console.log(err))
        }
    }, [props.status])

    return (
        <tbody>
            {!snusData ? <tr><td>{`Här var det tomt!`}</td></tr> : 
            snusData.map((snus, index) => {
                return (
                <tr key={index}>
                    <td>{snus.brand}</td>
                    <td>{snus.product}</td>
                    <td>{snus.snusType}</td>
                    <td>{snus.nicotineAmount}</td>
                    <td>{snus.amountPerBox}</td>
                    <td>{snus.producer}</td>
                    <td>{snus.misc}</td>
                    <td>{snus.status}</td>
                    <td className="table-icon edit"><FontAwesomeIcon icon={faEdit} /></td>
                    <td className="table-icon delete"><FontAwesomeIcon icon={faTrash} /></td>
                </tr>
                )
            })
            }
        </tbody>
    )
}

export default AdminTableRow
