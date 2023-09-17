import React from "react";

const ActionButton = ({ text, onClick, ...otherProps }) => {
  return (
    <button
      onClick={onClick}
      className="btn  ms-2"
      {...otherProps} // Spread other custom props here
    >
      {text}
    </button>
  );
};

export default ActionButton;
