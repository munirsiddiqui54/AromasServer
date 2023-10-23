import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'

const Signup = () => {
    return (
        <Layout>
            <div className='container box my-5'>
                <h1 className='mx-3'>Sign Up</h1>
                <div className="row m-4">
                    <input type="text" id="form2Example1" className="form-control m-2" placeholder='Name' />
                    <input type="email" id="form2Example1" className="form-control m-2" placeholder='Email' />
                    <input type="password" id="form2Example2" className="form-control m-2" placeholder='password' />
                </div>
                <p> Already have an Account ? <Link to='/Login' href="#!">Login</Link></p>
                <button type="submit" className="btn px-3 btn-primary btn-block mb-4">Register</button>
                <div className="text-center">

                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                        <i className="fab fa-facebook-f" />
                    </button>
                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                        <i className="fab fa-google" />
                    </button>
                </div>

            </div >
        </Layout>
    )
}

export default Signup