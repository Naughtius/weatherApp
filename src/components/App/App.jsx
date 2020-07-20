import React, { Component } from 'react';

import './App.css';

import CityWeather from '../CityWeather';
import Header from '../Header';
import ItemList from '../ItemList';

export default class App extends Component {

	render() {
		return(
			<div className="container">
				<div className="row">
					<Header />
					<ItemList />
					<CityWeather />
				</div>
			</div>
		)
	}

}