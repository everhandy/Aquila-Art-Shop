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
          <li className="nav-item">
            <Link onClick={handleToggle} to="/signup" className="my-3">
              Signup
            </Link>
          </li>
          <li className="nav-item">
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
      {/* <header className="fixed-top site__header">
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
      </header> */}
      <nav class="navbar navbar-expand-lg bg light">
        <div class="container d-flex justify-content-between">
          <div>
            <h1>Aquila Art Shop</h1>
          </div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/shop">Shop</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About Us</a>

                  </li>
                  {Auth.loggedIn() ? (<li className="menu_item">
                    <a href="/" onClick={() => Auth.logout()} className="my-3">
                      Logout
                    </a>
                  </li>) : (
                    <>
                      <li className="nav-item">
                        <Link onClick={handleToggle} to="/signup" className="nav-link">
                          Signup
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link onClick={handleToggle} to="/login" className="nav-link">
                          Login
                        </Link>
                      </li>
                    </>
                  )}

                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default Nav;
