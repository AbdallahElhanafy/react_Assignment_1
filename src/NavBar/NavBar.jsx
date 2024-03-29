import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'
import StartFrameWork from "../StartFrameWork/StartFrameWork";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar  navbar-expand-lg ">
                    <div className="container  ">
                        <Link className="navbar-brand text-white fw-bold" to={''}>START FRAMEWORK</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <NavLink className="nav-link rounded"  aria-current="page" to={'about'}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link rounded"  to={'portfolio'}>Portfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link rounded" to={'contact'}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;