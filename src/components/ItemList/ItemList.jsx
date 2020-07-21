import React, { Component } from 'react';

import './ItemList.css';

import openWeatherService from '../../services/openWeatherService';

export default class ItemList extends Component {

	openWeatherService = new openWeatherService();

	constructor(props) {
		super(props);

		this.state = {
			value: '',
			items: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let cityId = this.openWeatherService.getAllCity().find(city => city.name.toLowerCase() === this.state.value.toLowerCase());
		const items = [];
		items.push(cityId);
		this.setState({
			items
		})
		console.log(cityId)
	}

	renderItems = (arr) => {
		return arr.map(item => {
			return <div className="search-item">{item.name}</div>
		});
	};

	render() {

		let items = this.renderItems(this.state.items);

		return(
            <div className="search" id="search">
					<div className="col s4">
						<nav>
							<div className="nav-wrapper">
									<form onSubmit={this.handleSubmit}>
										<div className="input-field">
											<input id="search" type="search" value={this.state.value} onChange={this.handleChange} required />
											<label className="label-icon" htmlFor="search">
												<i className="material-icons">search</i>
											</label>
											<i className="material-icons">close</i>
										</div>
									</form>
							</div>
						</nav>
						<div className="search-items">
							{items}
						</div>
					</div>
            </div>
		)
	}

}
