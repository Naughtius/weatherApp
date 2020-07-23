import React, { Component } from 'react';

import './App.css';

import CityWeather from '../CityWeather';
import Header from '../Header';
import ItemList from '../ItemList';
import ErrorIndicator from '../ErrorIndicator';

import openWeatherService from '../../services/openWeatherService';

export default class App extends Component {

	openWeatherService = new openWeatherService();

	constructor(props) {
		super(props);

		this.state = {
			cityList: this.openWeatherService.getAllCity(),
			selectedCity: 'Kazan',
			hasError: false
		};

	}

	chooseCity = (selectedCity) => {
		this.setState({
			selectedCity
		});
	};

	componentDidCatch() {
		this.setState({
			 harError: true
		});
  	};
	
	render() {

		const { cityList, selectedCity, hasError } = this.state;

		if(hasError) {
			return <ErrorIndicator />;
		}

		return(
			<div className="container">
				<div className="row">
					<Header />
					<ItemList cityList={ cityList } chooseCity={ this.chooseCity } />
					<CityWeather selectedCity={ selectedCity } />
				</div>
			</div>
		);
	};

};