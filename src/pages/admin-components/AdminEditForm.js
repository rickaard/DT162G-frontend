import React, { useEffect } from 'react';
import useModal from 'use-react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import './AdminEditForm.scss';



const AdminEditForm = props => {
    const { isOpen, openModal, closeModal, Modal } = useModal({background: 'rgba(0, 0, 0, 0.9)'});
    const { register, handleSubmit, errors, setValue } = useForm();


    useEffect(() => {
        setValue("brand", props.snus.brand);
        setValue("product", props.snus.product);
        setValue("snusType", props.snus.snusType);
        setValue("nicotineAmount", props.snus.nicotineAmount);
        setValue("amountPerBox", props.snus.amountPerBox);
        setValue("producer", props.snus.producer);
        setValue("misc", props.snus.misc);
    })

    const documentId = props.snus._id;
    const onSubmit = (data) => {
        // check if token is saved
        if (localStorage.getItem("token")) {
            const savedToken = localStorage.getItem("token");
            fetch(process.env.REACT_APP_ADMIN_API_URL + documentId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': savedToken
                },
                body: JSON.stringify(data)
            })
            .then(resp => resp.json())
            .then(data => {
                props.updateTableRow();
            })
            .catch(err => console.log(err))
        }
        closeModal();
    };



    const ModalStyle = {
        background: '#FFF',
        padding: '2em'
    };

    return (
        <>
            <FontAwesomeIcon 
                icon={faEdit} 
                onClick={openModal}
            />
            {isOpen && (
                <Modal>
                    <div style={ModalStyle} className="form-wrapper">
                        <span className="closeBtn" onClick={closeModal}>X</span>
                        <form className="admin-edit-form" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="brand">Produktmärke: *</label>
                            <input type="text" placeholder="T.ex. Kapten, Lundgrens..." name="brand" ref={register({required: true, min: 2, maxLength: 255})} />
                            {errors.brand && <span className="error-msg">Detta fält måste fyllas i</span>}

                            <label htmlFor="product">Produkttyp: *</label>
                            <input type="text" placeholder="T.ex. Vit, Akvavit, Skåne..." name="product" ref={register({required: true, min: 2, maxLength: 255})} />
                            {errors.product && <span className="error-msg">Detta fält måste fyllas i</span>}

                            <label htmlFor="snusType">Snustyp:</label>
                            <input type="text" placeholder="T.ex. Vit portion, Original portion, Lös..." name="snusType" ref={register({maxLength: 255})} />

                            <label htmlFor="nicotineAmount">Nikotinhalt:</label>
                            <input type="text" placeholder="T.ex. 15 mg/g" name="nicotineAmount" ref={register({maxLength: 255})} />

                            <label htmlFor="amountPerBox">Innehåll/förp:</label>
                            <input type="text" placeholder="T.ex. 17 g" name="amountPerBox" ref={register({maxLength: 255})} />

                            <label htmlFor="producer">Producent:</label>
                            <input type="text" placeholder="T.ex. Swedish Match, AG Snus..." name="producer" ref={register({maxLength: 255})} />

                            <label htmlFor="misc">Övrigt:</label>
                            <input type="text" placeholder="Övrigt om snuset, t.ex. pris, smak, etc..." name="misc" ref={register({maxLength: 255})} />

                            <label htmlFor="status">Status:</label>
                            <select ref={register} name="status" defaultValue={props.snus.status}>
                                <option value="1">Väntar</option>
                                <option value="2">Godkänd</option>
                                <option value="3">Nekad</option>
                            </select>

                            <input type="submit" value="Ändra"/>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default AdminEditForm
