import React, { useContext } from 'react'
import ContactsContex from './ContactsContex'
import './Contact.css';

function Contact({ person }) {
    const { setContacts, contacts} = useContext(ContactsContex);
    const removeFromContact = () => {
        setContacts(prevContacts => {
           return prevContacts.filter(contact=>contact.id!=person.id);
        });
    }
    return (
        <div className='row pe-2 contact' style={{ cursor: 'pointer' }}>
            <div className='col-11 mt-2'>
                <b>{person.name}</b>
                <span>
                    <ul className="ps-1">
                        <li className='nav-link'>Phone: {person.tel}</li>
                        <li className='nav-link'>Ville: {person.ville}</li>
                    </ul>
                </span>
            </div>
            <button className='col-1 del-btn' onClick={removeFromContact}>
                x
            </button>
        </div>
    )
}

export default Contact