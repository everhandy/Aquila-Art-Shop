import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { logotext } from "../../content";
import Modetoggle from "../../components/modetoggle";
import Auth from "../../utils/auth";

function Nav() {
  const [isActive, setActive] = React.useState(false);

  function handleToggle() {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="the_menu">
          <li className="menu_item">
            <a href="/" onClick={() => Auth.logout()} className="my-3">
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="the_menu">
          <li className="menu_item">
            <Link onClick={handleToggle} to="/signup" className="my-3">
              Signup
            </Link>
          </li>
          <li className="menu_item">
            <Link onClick={handleToggle} to="/login" className="my-3">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Modetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">{showNavigation()}</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
