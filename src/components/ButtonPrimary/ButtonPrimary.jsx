import React from "react";
import "./buttonPrimary.css";

const ButtonPrimary = ({ onClick, title, disabled }) => {
  return (
    <button className="buttonPrimary" type="button" onClick={onClick}>
      {title}
    </button>

    // onClick={() => onClick()} disabled={disabled}
  );
};

export default ButtonPrimary;
