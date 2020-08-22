import React, { Component } from "react";

import "./CityWeather.css";

import openWeatherService from "../../services/openWeatherService";
import Spinner from "../Spinner";

export default class CityWeather extends Component {
   openWeatherService = new openWeatherService();

   state = {
      city: {},
      loading: true,
   };

   componentDidMount() {
      this.updateCity();
   }

   componentDidUpdate(prevProps) {
      if (this.props.selectedCity !== prevProps.selectedCity) {
         this.updateCity();
      }
   }

   updateCity() {
      const { selectedCity } = this.props;

      this.openWeatherService
         .getCity(selectedCity)
         .then((city) => {
            this.setState({
               city,
               loading: false,
            });
         })
         .catch(this.onError);
   }

   render() {
      const { city, loading } = this.state;

      const spinner = loading ? <Spinner /> : null;
      const content = !loading ? <CityView city={city} /> : null;

      return (
         <div className="city" id="city">
            <div className="col s8">
               <div className="city-wrap">
                  {spinner}
                  {content}
               </div>
            </div>
         </div>
      );
   }
}

const CityView = ({ city }) => {
   const {
      name,
      temp,
      temp_max,
      temp_min,
      feels_like,
      language,
      coord_nl,
      coord_el,
   } = city;

   return (
      <React.Fragment>
         <div className="city-info">
            <span className="city-info__temperature">{temp}&#176;</span>
            <span className="city-info__name">{name}</span>
         </div>
         <div className="city-info__more">
            <div className="city-info__more-item">
               <p>Максимальная температура: {temp_max}&#176;</p>
               <p>Минимальная температура: {temp_min}&#176;</p>
               <p>Ощущается как: {feels_like}&#176;</p>
            </div>
            <div className="city-info__more-item">
               <p>Язык: {language}</p>
               <p>
                  Координаты: {coord_nl} с.ш. (N), {coord_el} в.г. (E)
               </p>
            </div>
         </div>
      </React.Fragment>
   );
};
