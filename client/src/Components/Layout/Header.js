import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../../context/auth';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { toast } from 'react-hot-toast';

const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem('auth');
        toast.success('Successfully Logout', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
    }
    return (
        <>
            <nav id='Nav' className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/about' className="navbar-brand">SRK FRAGRANCE</Link >
                    <ul style={{ display: 'flex' }} className="m-0 p-0 ms-auto">

                        {
                            auth.user ? (
                                <>
                                    <button onClick={handleLogout} className="btn nav-2btn btn-outline-danger mx-1">
                                        <BiLogOut /> Logout
                                    </button>
                                </>
                            ) :
                                (<>
                                    <NavLink to='/login' style={{ border: 'none' }} className="mx-1 "><button className="btn nav-2btn btn-primary">
                                        login
                                    </button></NavLink>
                                </>)
                        }
                    </ul>
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
                                <NavLink to='/about' className="nav-link" aria-current="page">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="ms-auto navbar-nav">


                            {
                                auth.user ? (
                                    <>


                                        <button onClick={handleLogout} className="btn nav-btn btn-outline-danger mx-1">
                                            <BiLogOut /> Logout
                                        </button>


                                    </>
                                ) :
                                    (<>

                                        <NavLink to='/register' style={{ border: 'none' }} className="mx-1"><button className="btn nav-btn btn-outline-primary">
                                            Register
                                        </button></NavLink>

                                        <NavLink to='/login' style={{ border: 'none' }} className="mx-1 "><button className="btn nav-btn btn-primary">
                                            login
                                        </button></NavLink>
                                    </>)
                            }

                            <li className="nav-item">
                                <NavLink to='/cart' className="nav-link"><AiOutlineShoppingCart /> Cart (0)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header