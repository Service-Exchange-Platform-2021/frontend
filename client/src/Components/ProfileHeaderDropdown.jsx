import React, { useState, activeMenu } from 'react';
import '../styles/scss/HeaderDropdown.scss';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import { FcDataConfiguration, FcLeft, FcServices, FcHome } from "react-icons/fc";

/*npm i react-transition-group */
function HeaderDropdown() {
    return (
        <Navbar>

            <NavItem icon={<FcDataConfiguration />}>
                <DropdownMenu />
            </NavItem>

        </Navbar>
    );
}

function Navbar(props) {


    return (
        <nav className="navbar">
            <ul className="navbar-nav"> {props.children} </ul>

        </nav>
    );
}

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>

            </div>
        );
    }
    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<FcHome />} goToMenu="profile"><Link to="/profile">My profile</Link></DropdownItem>
                    <DropdownItem leftIcon={<FcServices />} goToMenu="settings">Settings</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                    <DropdownItem leftIcon={<FcLeft />} goToMenu="main" />
                    <DropdownItem ><Link to="/profile/change_details">Change details</Link></DropdownItem>
                    <DropdownItem> <Link to="/profile/change_password">Change password</Link></DropdownItem>

                </div>
            </CSSTransition>

        </div>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <button className="icon-button" onClick={() => setOpen(!open)}> {props.icon} </button>
            {open && props.children}
        </li>
    );
}

export default HeaderDropdown;