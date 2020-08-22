import React from "react";

import "./Spinner.css";
import icon from "./spinner-icon.svg";

const Spinner = () => {
   return (
      <div className="spinner">
         <img src={icon} alt="spinner-icon" />
      </div>
   );
};

export default Spinner;
