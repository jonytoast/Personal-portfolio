import React from "react";
import '../styles/navbar.css';
import NavItem from "./navItem";
import DropdownMenu from "./navdropdown";
import { ReactComponent as MenuIcon } from '../icons/arrow.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav">
                <div className="nav-logo">
                    <p className="logo">Logo</p>
                </div>
                <ul className="nav-items">
                    <li className="nav-item"><a className="contact-btn">Get in touch</a></li>
                    <NavItem icon={<MenuIcon />}>
                        <DropdownMenu />
                    </NavItem>
                </ul>
            </div>    
        </nav>
    );
}

export default Navbar;