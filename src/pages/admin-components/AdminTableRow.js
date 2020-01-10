import React, { useState, useEffect } from 'react'
import AdminEditForm from './AdminEditForm';
import AdminDeleteModal from './AdminDeleteModal';

const AdminTableRow = props => {
    const [snusData, setSnusData] = useState(undefined); // state där alla snus lagras
    const [toggleUpdate, setToggleUpdate] = useState(false); // boolean-state som togglas för att forcera en update av komponent när man gör en ändring
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {

        if (localStorage.getItem("token")) {
            fetch(process.env.REACT_APP_ADMIN_API_URL + props.status, {
                headers: {
                    'auth-token': localStorage.getItem("token")
                }
            })
            .then(res => res.json())
            .then(data => {
                setIsLoaded(true);
                setSnusData(data.snus);
            })
            .catch(err => console.log(err))
        }

    }, [props.status, toggleUpdate])

    const updateTableRow = () => {
        setToggleUpdate(!toggleUpdate); // toggla state för att, genom useEffect, forcera en update/re-render av komponenten
    }


    return (
        <tbody>
            {!isLoaded && <tr><td>Laddar....</td></tr>}
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
                    <td className="table-icon edit"><AdminEditForm snus={snus} updateTableRow={updateTableRow} snusId={snus._id}/></td>
                    <td className="table-icon delete"><AdminDeleteModal updateTableRow={updateTableRow} snusId={snus._id}/></td>
                </tr>
                )
            })
            }

        </tbody>
    )
}

export default AdminTableRow
