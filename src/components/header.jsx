// import { useState, useEffect } from 'react';
import { Link } from 'react-router';


import 'bootstrap/dist/css/bootstrap.css';
const Header = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg  bg-light'>
          <ul className="nav">
            <li className='nav-item d-flex flex-row justify-content-between'>
              <Link className="nav-link" to="/">UserForm</Link>
              <Link className="nav-link" to="/apis">Apis</Link>
              <Link className="nav-link" to="/practice">Practice</Link>
              <Link className="nav-link" to="/Chat">Chat</Link>
              <Link className="nav-link" to="/form">Form</Link>
              <Link className="nav-link" to="/bookshelf">Bookshelf</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;