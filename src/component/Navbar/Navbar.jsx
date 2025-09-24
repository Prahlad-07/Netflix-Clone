import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('nav-dark');
        } else {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <Link to="/">
          <img className='nav-logo' src={logo} alt="Netflix Logo" />
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className='icons' />

        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Dropdown" />
          <div className='dropdown'>
            <Link to="/login">
              <p>Sign out of Netflix</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;