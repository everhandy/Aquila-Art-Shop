import React, { useState, useEffect, Fragment } from "react";
import Auth from "../utils/auth";
import Splash from "../Components/Splash/index.jsx";
import Title from '../Components/Title/Index.jsx';
import Artworks from '../Components/Artworks/index.jsx';
import Artists from '../Components/Artists/index.jsx';


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
