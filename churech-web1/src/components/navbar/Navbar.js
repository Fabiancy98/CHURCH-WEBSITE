import React from 'react';
// import logo from 'public/IMG-20221011-WA0007.jpg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    <h1>Ambasadors of christ</h1>
                    {/* <img src={logo} className="Church-logo" alt="logo" /> */}
                      
                    
                </Link>
            </div>
        </nav>
    </>
  )
}
