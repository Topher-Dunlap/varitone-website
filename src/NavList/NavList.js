import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavList.css';

export default function NavList(props) {
    return (
        <div className="column left">
            <ul className='NavList'>
                <NavLink
                    exact to="/"
                    activeClassName="isActive"
                    className="navItem">
                    Home
            </NavLink>
                <NavLink
                    to="/gallery"
                    activeClassName="isActive"
                    className="navItem">
                    Gallery
            </NavLink>
                <NavLink
                    to='/varitone_history'
                    activeClassName="isActive"
                    className="navItem">
                    History
            </NavLink>
                <NavLink
                    to='/varitone_ads'
                    activeClassName="isActive"
                    className="navItem">
                    Ads
            </NavLink>
                <NavLink
                    to='/varitone_brochure'
                    activeClassName="isActive"
                    className="navItem">
                    Brochure
            </NavLink>
                <NavLink
                    to='/buy'
                    activeClassName="isActive"
                    className="navItem">
                    Buy
            </NavLink>
            </ul>
        </div>
    )
}