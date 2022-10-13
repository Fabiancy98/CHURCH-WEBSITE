import React, { useState } from 'react';
// import img from 'public/IMG-20221011-WA0007.jpg';
import { Link } from 'react-router-dom';
import { MenuItems } from './Menuitems';

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    <h1>Ambasadors of christ</h1>
                    {/* <img src={img} className="Church-logo" alt="logo" /> */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item>'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item>'>
                    <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                      Who We Are
                    </Link>
                  </li>
                  <li className='nav-item>'>
                    <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                      Let's Connect
                    </Link>
                  </li>
                  <li className='nav-item>'>
                    <Link to='/ourMinistries' className='nav-links' onClick={closeMobileMenu}>
                      Our Ministries
                    </Link>
                  </li>
                  <li className='nav-item>'>
                    <Link to='/ourResources' className='nav-links' onClick={closeMobileMenu}>
                      Our Resources
                    </Link>
                  </li>
                  <li className='nav-item>'>
                    <Link to='/whatsNew' className='nav-links' onClick={closeMobileMenu}>
                      What's New
                    </Link>
                  </li>
                  <li className='nav-item>'>
                    <Link to='/giveBack' className='nav-links' onClick={closeMobileMenu}>
                      Give Back
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  )
}
