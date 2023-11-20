import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header-format sticky top-0 z-50">
    <div>
      <nav className="text-center bg-cover">
        {Auth.loggedIn() && (
          <div className="nav-wrapper flex items-center justify-between p-4">
           
            <a href="/" id="logo" className="w-16 shrink place-self-center mb-3">
              <p>Aquila</p>
            </a>
            <a 
              className="rounded duration-500 hover:scale-105"
              href="/"
              onClick={logout}
            >
              Logout
            </a>
          </div>
        )}
      </nav>
    </div>
  </header>
  );
};

export default Header;
