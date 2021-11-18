import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../logo.PNG'
import { FiChevronsDown } from 'react-icons/fi'
import Dropdown from '../dropDown/Dropdown'
const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);


    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };
    return (
        <nav className="navbar">

            <ul className="nav-links">
                <li>
                    <img src={logo} alt='' width='100px' height='100px' />
                </li>
                <li>
                    <NavLink to='/' className="nav-link">
                        HOME WORKOUTS
                    </NavLink>
                </li>
                <li
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <NavLink to='/' className="nav-link"
                    >
                        PROGRAMS<FiChevronsDown />
                    </NavLink>
                    {dropdown && <Dropdown />}

                </li>
                <li>
                    <NavLink to='/' className="nav-link">
                        CLASSES
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/form' className="nav-link" >
                        JOIN NOW
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className="nav-link">
                        ABOUT
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar

