import React from "react";
import "./Toggle.css";


const ToggleSwitch = ({label, label2, click }) => {

  return (
    <div className="toggle">
      {label}{" "}
      <div className="toggle-switch">
        <input  type="checkbox" className="checkbox" 
              name={[label, label2]} id={label} onClick={click}/>
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