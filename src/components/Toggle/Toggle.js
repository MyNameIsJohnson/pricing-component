import React from "react";
import "./Toggle.css";
  
const ToggleSwitch = ({ label, label2 }) => {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input  type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      {label2}{" "}
    </div>
  );
};
  
export default ToggleSwitch;