import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactBook,faPhoneFlip } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom';
import './Navbar.css'

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg pb-0">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item text-center">
                        
                        <NavLink to='/' className="nav-link mx-2">
                            <FontAwesomeIcon icon={faContactBook} className='icon' />
                            <p className='mb-0'>Contacts</p>
                        </NavLink>
                    </li>
                    <li className="nav-item  text-center">
                        <NavLink to='/new-contact' className="nav-link mx-2">
                            <FontAwesomeIcon icon={faPhoneFlip} className='icon flip' />
                            <p className='mb-0'>Add To Contacts</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default NavBar;