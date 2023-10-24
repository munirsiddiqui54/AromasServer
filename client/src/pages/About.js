import React from 'react'
import Layout from '../Components/Layout/Layout'
import imgg from '../photos/about.jpg'

const About = () => {
    return (
        <Layout>
            <section className="container my-5">
                <div className="row">
                    <div className="about col-lg-6">
                        <img src={imgg} className="img-fluid rounded-circle" alt="about shop" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-4 head">About Your Fragrance Haven</h1>
                        <p>Welcome to Your Fragrance Haven, your one-stop destination for premium fragrances. Our passion for
                            scents and dedication to quality make us your ideal choice for all things perfume.</p>
                        <p>At Your Fragrance Haven, we curate a wide range of scents from around the world. From designer
                            perfumes to exotic fragrances, we have something for everyone. Our mission is to help you discover
                            the perfect scent that complements your style and personality.</p>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default About