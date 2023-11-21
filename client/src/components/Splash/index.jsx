import { useState } from "react";
import PropTypes from 'prop-types';
import Log from '../Log/index';

const Splash = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleHeadingClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div
      id="loginsplash"
      className=" flex p-1 justify-center"
    >
      <h1
        onClick={handleHeadingClick}
        className={`flex flex-col ${showLinks ? 'invisible' : ''}`}
      >
        Aquila
      </h1>
      {showLinks && (
        <>
          <Log />
        </>
      )}
    </div>
  );
};

Splash.propTypes = {
  splash: PropTypes.array.isRequired,
};

export default Splash;
