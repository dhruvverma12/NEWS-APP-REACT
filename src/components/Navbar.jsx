import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/logo.jpg'

const Navbar = ({ data, setdata, fetchNews }) => {
  const handleClick = (e) => {
    e.preventDefault();
    fetchNews();
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="News Website Logo" className="hero-image" /> {/* Replace with your image path */}
      <form className="search-form">
        <input type="search" value={data} onChange={(e) => setdata(e.target.value)} className="search-input" />
        <input type="submit" value="SEARCH" onClick={handleClick} className="search-button" />
      </form>
    </div>
  );
};


export default Navbar;
