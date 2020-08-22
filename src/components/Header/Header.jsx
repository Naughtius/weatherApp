import React from "react";

import "./Header.css";

const Header = () => {
   const dateNow = () => {
      const date = new Date();

      const options = {
         month: "long",
         day: "numeric",
         weekday: "long",
         timezone: "UTC",
      };

      return date.toLocaleString("ru", options).toUpperCase();
   };

   const date = dateNow();

   return (
      <div className="header" id="header">
         <nav className="orange lighten-1">
            <div className="nav-wrapper">
               <a href="/" className="brand-logo left">
                  WeatherApp
               </a>
               <ul className="right">
                  <li className="logo">
                     <a href="/">{date}</a>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default Header;
