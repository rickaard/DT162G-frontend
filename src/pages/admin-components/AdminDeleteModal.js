import React from 'react'
import './AdminDeleteModal.scss';
import useModal from 'use-react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AdminDeleteModal = props => {
    const { isOpen, openModal, closeModal, Modal } = useModal({background: 'rgba(0, 0, 0, 0.9)'});


    const handleDelete = () => {
        if (localStorage.getItem("token")) {
            fetch(process.env.REACT_APP_ADMIN_API_URL + props.snusId, {
                method: 'DELETE',
                headers: {
                    'auth-token': localStorage.getItem("token")
                }
            })
            .then(resp => resp.json())
            .then(data => {
                props.updateTableRow();
            })
        }
        closeModal(); // Stänger modal efter delete
    }

    const ModalStyle = {
        background: '#FFF',
        padding: '2em'
    };
    return (
        <>
            <FontAwesomeIcon 
                icon={faTrash} 
                onClick={openModal}
            />

            {isOpen && (
                <Modal>
                    <div style={ModalStyle} className="delete-wrapper">
                        <div>
                            <p className="delete-text">Är du säker på att du vill radera denna?</p>
                        </div>
                        <div className="btn-wrapper">
                            <span className="delete-close" onClick={closeModal}>Avbryt</span>
                            <span className="delete-confirm" onClick={handleDelete}>Ta bort</span>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default AdminDeleteModal
