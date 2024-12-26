import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../assets/Images/Yellow.png'
import './SidebarCSS.css'
import Protfolio from './../Pages/Protfolio';


const Sidebar = () => {
    return (

        <div className="sidebar">
            <img
                src={Image}
                alt="Profile"
                className="profile-pic"
            />
            <h1>Pias Barua</h1>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
                <li><NavLink to = '/protfolio'>Protfolio</NavLink> </li>
                <li><NavLink to = '/services'>Services</NavLink> </li>
            </ul>
        </div>


    );
};

export default Sidebar;
