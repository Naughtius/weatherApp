import React, { Component } from "react";

import "./ItemList.css";

import openWeatherService from "../../services/openWeatherService";
import SearchPanel from "../SearchPanel";
export default class ItemList extends Component {
   openWeatherService = new openWeatherService();

   constructor(props) {
      super(props);

      this.state = {
         findCity: [],
         term: "",
      };
   }

   renderItems = (arr) => {
      return arr.map((item) => {
         return (
            <div
               className="search-item"
               onClick={() => this.props.chooseCity(item.name)}
               key={item.id}
            >
               {item.name}
            </div>
         );
      });
   };

   handleSubmit = (event) => {
      event.preventDefault();

      const { cityList } = this.props,
         { term } = this.state;
      const findCity = [];

      findCity.push(this.binarySearch(cityList, term, 0, cityList.length - 1));

      this.setState({ findCity });
   };

   binarySearch = (data, target, start, end) => {
      if (end < 1) return data[0];
      const middle = Math.floor(start + (end - start) / 2);

      if (target.toLowerCase() === data[middle].name.toLowerCase())
         return data[middle];

      if (end - 1 === start)
         return Math.abs(
            data[start].name.toLowerCase() - target.toLowerCase()
         ) > Math.abs(data[end].name.toLowerCase() - target.toLowerCase())
            ? data[end]
            : data[start];

      if (target.toLowerCase() > data[middle].name.toLowerCase())
         return this.binarySearch(data, target, middle, end);
      if (target.toLowerCase() < data[middle].name.toLowerCase())
         return this.binarySearch(data, target, start, middle);
   };

   onSearchChange = (e) => {
      this.setState({
         term: e.target.value,
      });
   };

   render() {
      const { findCity, term } = this.state;

      const items = this.renderItems(findCity);

      return (
         <div className="search" id="search">
            <div className="col s4">
               <nav>
                  <div className="nav-wrapper">
                     <SearchPanel
                        term={term}
                        handleSubmit={this.handleSubmit}
                        onSearchChange={this.onSearchChange}
                     />
                  </div>
               </nav>
               <div className="search-items">{items}</div>
            </div>
         </div>
      );
   }
}
