import React, { useState, useEffect, Fragment } from "react";
import Auth from "../utils/auth";
import Splash from "../components/Splash";
import Title from '../components/Title';
import Artworks from '../components/Artworks';
import Artists from '../components/Artists';


const Home = () => {
  const splash = [];

  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());

  useEffect(() => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    // update logged state when the auth changes
    setLoggedIn(Auth.loggedIn());
  }, []);

  return (
    <main>
      {loggedIn && (
        <Fragment>
            <main id="main" className="site-main">
                <Title />
                <Artists />
                <Artworks />
            </main>
        </Fragment>
      )}
      {!loggedIn && (
        <div className="col-span-3">
          <Splash splash={splash} />
        </div>
      )}
    </main>
  );
};

export default Home;
