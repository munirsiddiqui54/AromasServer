import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import './pagenotfound.css'

const PageNotFound = () => {
    return (
        <Layout>
            <div className="pnf">
                <h1 className="pnf-title">404</h1>
                <h2 className="pnf-heading">Oops ! Page Not Found</h2>
                <Link to="/">
                    <button className="btn btn-outline-dark m-4">
                        Go Back
                    </button>
                </Link>
            </div>
        </Layout>
    )
}

export default PageNotFound