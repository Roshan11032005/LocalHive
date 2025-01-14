import React from 'react';
import { Link } from "react-router-dom";

import './Home.css';
import Navbar from '../components/NavBar';



const Home = () => {
    return (
        <div className="landing-page">
            <Navbar></Navbar>
            <section className="hero">
                <h1>Welcome to Local Hive</h1>
                <p>Your trusted wholesale marketplace for local goods.</p>
                <button className="explore-btn">Explore Now</button>
            </section>


            <section id="categories" className="categories">
                <h2>Our Categories</h2>
                <div className="category-grid">
                    <div className="category-item">Fruits & Vegetables</div>
                    <div className="category-item">Dairy & Bakery</div>
                    <div className="category-item">Grains & Pulses</div>
                    <div className="category-item">Organic Products</div>
                </div>
            </section>

            <section id="testimonials" className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial">
                    <p>"Local Hive has transformed the way I source goods for my store. Reliable and affordable!"</p>
                    <span>- John Doe</span>
                </div>
                <div className="testimonial">
                    <p>"Exceptional quality and variety. Local Hive supports local businesses like no other!"</p>
                    <span>- Jane Smith</span>
                </div>
            </section>

            <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <p>Have questions or need assistance? Reach out to us anytime!</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Local Hive. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home
