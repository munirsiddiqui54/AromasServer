import React, { useState } from 'react'
import './auth.css'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'

import toast from 'react-hot-toast';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(`${process.env.REACT_APP_API}api/v1/auth/login`, { email, password });
            if (resp.data.success) {
                toast.success('Welcome Back');
                navigate('/')

            } else {
                toast.error(resp.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }

    return (
        <Layout>
            <div className='form-container p-5'>
                <div className='container box'>
                    <h1 className='mx-3'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="row m-4">
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="form2Example1" className="form-control m-2" placeholder='Email' required />
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="form2Example2" className="form-control m-2" placeholder='password' required />
                        </div>
                        <button type="submit" className="btn px-3 btn-primary btn-block mb-4">Login</button>
                    </form>
                    <div className="text-center">
                        <p>Not a member? <Link to='/register' href="#!">Register</Link></p>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-secondary btn-floating mx-1">
                            <i className="fab fa-facebook-f" />
                        </button>
                        <button type="button" className="btn btn-secondary btn-floating mx-1">
                            <i className="fab fa-google" />
                        </button>
                    </div>
                </div ></div>
        </Layout>
    )
}

export default Login