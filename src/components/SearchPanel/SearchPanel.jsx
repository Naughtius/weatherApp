import React from "react";

import "./SearchPanel.css";

const SearchPanel = ({ term, onSearchChange, handleSubmit }) => {
   return (
      <form onSubmit={handleSubmit}>
         <div className="input-field">
            <input
               id="search"
               type="search"
               value={term}
               onChange={onSearchChange}
               required
            />
            <label className="label-icon" htmlFor="search">
               <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
         </div>
      </form>
   );
};

export default SearchPanel;
