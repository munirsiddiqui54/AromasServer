import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <nav id='Nav' className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/about' className="navbar-brand">SRK FRAGRANCE</Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="ms-auto navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/category' className="nav-link">Category</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/register' className="nav-link">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/login' className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/cart' className="nav-link">Cart (0)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header