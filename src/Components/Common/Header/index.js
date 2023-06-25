import React from 'react';
import "./styles.css";
import TemporaryDrawer from './drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Header() {
    

  return (
    <div className='navbar'>
      <a href='/'>
        <h1 className='logo'>
          CryptoTrackia
          <span style={{color: "var(--pink)"}}>
            .
          </span>
        </h1>
      </a>
        <div className='links'>
          <Link to='/'>
            <p className='link'>Home</p>
          </Link>
          <Link to='/compare'>
            <p className='link'>Compare</p>
          </Link>
          <Link to='/dashboard'>
            <Button text={"Dashboard"} 
            onClick={() => {}}/>
          </Link>
        </div>
        <div className='mobile-drawer'>
          <TemporaryDrawer />
        </div>
    </div>
  )
}

export default Header