import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../logo.PNG'
const Navbar = () => {
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
                </li><li>
                    <NavLink to='/' className="nav-link">
                        PROGRAMS
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="nav-link">
                        CLASSES
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="nav-link" >
                        JOIN NOW
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="nav-link">
                        ABOUT
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar

