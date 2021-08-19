import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar_container">
        <div className="logo_text">Landkit.</div>
          <ul className="navigation">
            <li>
              <a href="#">Landing</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
            <li>
              <a href="/documentation">Documentation</a>
            </li>
            <li>
              <a href="#" className='nav_button'>Buy Now</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Navbar
