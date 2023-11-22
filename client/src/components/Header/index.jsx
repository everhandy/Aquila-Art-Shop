import React, { useState } from 'react';
import Auth from '../../utils/auth';
import Cart from '../Cart/index';
import Toggler from '../Toggler';

const Header = () => {
  const [isDarkMode] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header id="header" className={`site-header header-format sticky top-0 z-50 ${isDarkMode ? 'dark-mode' : ''}`}>
      <div>
        <nav className="text-center bg-cover">
          {Auth.loggedIn() && (
            <div className="nav-wrapper navbar-wrapper wrapper d-flex flex items-center justify-between p-4">
              <a href="/" id="logo" className="w-16 shrink align-self-center mb-3">
                <h3>Aquila</h3>
              </a>
              <div className="cartico">
                <button>
                  <Cart />
                </button>
              </div>
              <div>
               <Toggler />
              </div>
              <div className="navbtn">
                <button
                  className="rounded duration-500 hover:scale-105 mr-1"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};


export default Header;
