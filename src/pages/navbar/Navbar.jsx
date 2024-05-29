import React, { useState } from 'react';
import { Select, MenuItem, OutlinedInput } from "@mui/material";
import './Navbar.css';

const Navbar = () => {
  const [phone, setPhone] = useState("");
  const [audio, setAudio] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeAudio = (event) => {
    setAudio(event.target.value);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar container">
      <div className="logo">
        Nothing
      </div>
      <button className="menu-toggle" onClick={handleMenuToggle}>☰</button>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="dropdown">
          <Select
            value={phone}
            className='SelectNavbarDropdown'
            onChange={handleChangePhone}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>Phone</MenuItem>
            <MenuItem value={"phone-(2a)"}>phone-(2a)</MenuItem>
            <MenuItem value={"phone-2"}>phone-2</MenuItem>
            <MenuItem value={"phone-1"}>phone-1</MenuItem>
          </Select>
        </div>
        <div className="dropdown">
          <Select
            value={audio}
            className='SelectNavbarDropdown'
            onChange={handleChangeAudio}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>Audio</MenuItem>
            <MenuItem value={"ear(a)"}>ear(a)</MenuItem>
            <MenuItem value={"ear"}>ear</MenuItem>
          </Select>
        </div>
        <div className="non-dropdown">
          <a href="#">cmf</a>
          <a href="#">Community</a>
          <a href="#">Support</a>
        </div>
      </div>
      <div className="navbar-icon">
        <div className="icon-circle"></div>
        <div className="icon-semicircle"></div>
      </div>
    </div>
  );
};

export default Navbar;
