import React from 'react'
import Layout from '../Components/Layout/Layout.js'
import { useAuth } from '../context/auth.js';

const Home = () => {
    const [auth, setAuth] = useAuth();
    return (
        <Layout>
            HOME
            <pre> {JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    )
}

export default Home