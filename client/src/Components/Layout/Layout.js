import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Header />
            <div className='m-0' style={{ minHeight: "80vh" }}>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Layout