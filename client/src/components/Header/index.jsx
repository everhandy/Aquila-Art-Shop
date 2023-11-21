import React from "react";
import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
<header id="header" className="site-header header-format sticky top-0 z-50">
  <div>
    <nav className="text-center bg-cover">
      {Auth.loggedIn() && (
        <div className="nav-wrapper navbar-wrapper wrapper d-flex flex items-center justify-between p-4">
          <a href="/" id="logo" className="w-16 shrink align-self-center mb-3">
            <h3>Aquila</h3>
          </a>
          <button
            className="rounded duration-500 hover:scale-105 mr-1"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  </div>
</header>
  );
};

export default Header;

