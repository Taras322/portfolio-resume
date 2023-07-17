import React from 'react';
import './style.css';

import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

const Nav = () => {

    const activeLink = 'nav-list__link nav-list__link--active';

    const normalLink = 'nav-list__link';

    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to='/' className="logo"><strong>Portfolio</strong></NavLink>

                        <ul className="nav-list">
                            <li className='nav-list__item'>
                                <NavLink to='/' className={({isActive})=>isActive ? activeLink : normalLink}>
                                    Home
                                </NavLink>
                            </li>
                            <li className='nav-list__item'>
                                <NavLink to='/skills' className={({isActive})=>isActive ? activeLink : normalLink}>
                                    Skills
                                </NavLink>
                            </li>
                            <li className='nav-list__item'>
                                <NavLink to='/contacts' className={({isActive})=>isActive ? activeLink : normalLink}>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                        <BtnDarkMode/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;