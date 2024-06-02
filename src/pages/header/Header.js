import React, { useState,useEffect } from 'react';
import './header.css';
import usericon from "../../assets/icons/user.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(true);
    const [drawerOpen,setDrawerOpen] = useState(false);

    const handleResize = () => {
        if (window.innerWidth > 1024) {
            setMenuOpen(true); 
            setDrawerOpen(false); 
        } else {
            setDrawerOpen(true); 
        }
    };

useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

    const toggleMenu = () => {
        setMenuOpen(false);
        {(drawerOpen)?setDrawerOpen(false):setDrawerOpen(true)}
    };

    return (
        <header>
            <div className="navbar container">
                <div className="logo">
                    <h3>Nothing</h3>
                </div>
                {!drawerOpen && menuOpen && (
                    <nav>
                        <ul className={`nav-links ${menuOpen? 'open' : ''}`}>
                            <li><div class="dropdown">
  <button class="btn selectdropdown dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
    Phone
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Phone 2</a></li>
    <li><a class="dropdown-item" href="#">Phone 2(a)</a></li>
    <li><a class="dropdown-item" href="#">Phone 1</a></li>
  </ul>
</div></li>
                            <li><div class="dropdown">
  <button class="btn selectdropdown dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
    Audio
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">ear 2</a></li>
    <li><a class="dropdown-item" href="#">ear 2(a)</a></li>
    <li><a class="dropdown-item" href="#">ear 1</a></li>
  </ul>
</div></li>
                            <li><a href="#">CMF</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </nav>
                )}
                <div className='icons'>
                <div className="profile-icon">
                    <img style={{width:"16px",height:"16px"}} src={usericon} alt="Profile" />
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {(drawerOpen)?<CloseIcon/>:<MenuIcon/>}
                </div>
                </div>
            </div>
            {drawerOpen && (
                <div className={`dropdown-menu ${drawerOpen? 'open' : ''}`}>
                    <ul>
                        <li><div class="dropdown">
  <button class="btn selectdropdown dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
    Phone
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Phone 2</a></li>
    <li><a class="dropdown-item" href="#">Phone 2(a)</a></li>
    <li><a class="dropdown-item" href="#">Phone 1</a></li>
  </ul>
</div></li>
                        <li><div class="dropdown">
  <button class="btn selectdropdown dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
    Audio
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">ear 2</a></li>
    <li><a class="dropdown-item" href="#">ear 2(a)</a></li>
    <li><a class="dropdown-item" href="#">ear 1</a></li>
  </ul>
</div></li>
                        <li><a href="#">CMF</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
