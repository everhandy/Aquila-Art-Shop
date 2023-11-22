import React from "react";
import { useDarkMode } from "../../App";

function Toggler() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="navbtn rounded duration-500 hover:scale-105 mr-1">
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default Toggler;
