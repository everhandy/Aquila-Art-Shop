import React from "react";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Checkout Successful</h2>
          <h3>Thank you for your purchase!</h3>
          <h3>You will now be redirected to the home page</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessPopup;