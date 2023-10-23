import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Header />
            <main className='m-0' style={{ minHeight: "80vh", backgroundColor: 'white' }}>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout