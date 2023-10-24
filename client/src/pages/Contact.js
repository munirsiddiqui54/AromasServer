import React from 'react'
import Layout from '../Components/Layout/Layout'
import './contact.css';
import { FaRegAddressCard } from 'react-icons/fa';
import '../index.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <Layout>
            <div style={{ minHeight: '60vh' }} className='contact box-2 container-md  p-0 d-flex mt-5'>
                <div class="info-wrap w-100 p-md-5 p-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h1>Let's get in touch</h1>
                    <p class="mb-4">We're open for any suggestion or just to have a chat</p>
                    <div class="dbox w-100 d-flex align-items-start">

                        <div class="text pl-3">
                            <p><span class="fa fa-map-marker mx-2"></span><span>Address:</span> Gaibinagar, Bhiwandi 421 302
                            </p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                        <div class="text pl-3">
                            <p><span class="fa fa-phone mx-2"></span> <span>   Phone:</span> <a href="tel://1234567920"> + 1235 2355 98</a></p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                        <div class="text pl-3">
                            <p> <span class="fa fa-paper-plane mx-2"></span><span>Email:</span> <a
                                href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                        </div>
                    </div>

                </div>
                <div className='container m-0' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 className='m-3'>Get in touch</h1>
                    <div className="row m-4">
                        <input type="text" className="form-control m-2" placeholder='Name' />
                        <input type="email" className="form-control m-2" placeholder='Email' />
                        <input type="textArea" className="form-control m-2" placeholder='Message' />
                    </div>
                    <button type="submit" className="btn px-3 btn-outline-primary btn mb-4">Send Message</button>


                </div >

            </div>
        </Layout >
    )
}

export default Contact