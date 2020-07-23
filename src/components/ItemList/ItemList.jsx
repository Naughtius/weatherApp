import React, { Component } from 'react';

import './ItemList.css';

import openWeatherService from '../../services/openWeatherService';
import ErrorIndicator from '../ErrorIndicator';

export default class ItemList extends Component {

	openWeatherService = new openWeatherService();

	constructor(props) {
		super(props);

		this.state = {
			findCity: [],
			term: '',
			hasError: false
		};

	}

	renderItems = (arr) => {
		return arr.map(item => {
			return <div className="search-item" onClick={() => this.props.chooseCity(item.name)} key={ item.id }>{ item.name }</div>
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		
		const { cityList } = this.props;
		const { term, hasError } = this.state;
		const findCity = [];

		cityList.filter(item => {
			if (item.name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
				findCity.push(item);
			} else {
				this.setState({hasError: !hasError});
			}
			
			this.setState({
				findCity
			});

			return true;
		});
		  
	}

	onSearchChange = (e) => {
		this.setState({
			term: e.target.value
		});
	};

	render() {
		const { findCity, hasError } = this.state;

		const items = this.renderItems(findCity);
		const errorMessage = hasError ? <ErrorIndicator /> : null;
		const visibleItems = !hasError ? items : null;

		return(
			<div className="search" id="search">
				<div className="col s4">
					<nav>
						<div className="nav-wrapper">
						<form onSubmit={this.handleSubmit}>
							<div className="input-field">
									<input id="search" type="search" value={ this.state.term } onChange={ this.onSearchChange } required />
									<label className="label-icon" htmlFor="search">
										<i className="material-icons">search</i>
									</label>
									<i className="material-icons">close</i>
								</div>
							</form>
						</div>
					</nav>
					<div className="search-items">
						{ errorMessage }
						{ visibleItems }
					</div>
				</div>
			</div>
		)
	}

}
