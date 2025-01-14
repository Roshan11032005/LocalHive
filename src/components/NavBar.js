import React from "react";
import { Link } from "react-router-dom";
 // Import the CSS file
import "./Navbar.css"
const Navbar = () => {
  return (
    
           <header className="header">
               <div className="logo">Local Hive</div>
               <nav className="navigation">
                   <ul>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/contact">Contact Us</Link></li>
                       <li><Link to="/order">Order Now</Link></li>
                       <li><a href="#categories">Categories</a></li>
                       <li><a href="#testimonials">Testimonials</a></li>
                       <li><a href="#signup" className="signup-btn">Sign Up</a></li>
                   </ul>
               </nav>
           </header>
       );
};

export default Navbar;
