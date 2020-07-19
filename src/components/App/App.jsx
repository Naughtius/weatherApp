import React, { Component } from 'react';

import './App.css';
import CityWeather from '../CityWeather';

import openWeatherService from '../../services/openWeatherService';

export default class App extends Component {

	openWeatherService = new openWeatherService();

	render() {
		return(
			<div>
				<CityWeather />
			</div>
		)
	}

}