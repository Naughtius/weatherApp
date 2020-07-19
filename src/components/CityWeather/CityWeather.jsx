import React, { Component } from 'react';

import './CityWeather.css';

import openWeatherService from '../../services/openWeatherService';

export default class CityWeather extends Component {

	openWeatherService = new openWeatherService();

	state = {
		city: null
	}

	render() {
		console.log(this.openWeatherService.getCity('Kazan'));
		return(
			<div>123</div>
		)
	}

}