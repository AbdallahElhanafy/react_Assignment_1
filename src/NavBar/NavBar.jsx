import React, {Component} from 'react';
import {Link} from  'react-router-dom'
import StartFrameWork from "../StartFrameWork/StartFrameWork";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container d-flex justify-content-end ">
                        <Link className="navbar-brand" to={''}>START FRAMEWORK</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={'about'}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'portfolio'}>Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'contact'}>Contact</Link>
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