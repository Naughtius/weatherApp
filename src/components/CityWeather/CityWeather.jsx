import React, { Component } from 'react';

import './CityWeather.css';

import openWeatherService from '../../services/openWeatherService';
import ErrorIndicator from '../ErrorIndicator';

export default class CityWeather extends Component {

	openWeatherService = new openWeatherService();

	state = {
		city: {},
		hasError: false
	};

	componentDidMount() {
		this.updateCity();
	};
	

	componentDidUpdate(prevProps) {
		if (this.props.selectedCity !== prevProps.selectedCity) {
			this.updateCity();
		}
	};

	updateCity() {

		const { selectedCity } = this.props;

		this.openWeatherService.getCity(selectedCity).then(city => {
			this.setState({ 
				city
			});
		}).catch(this.onError);
	};

	onError = (err) => {
		this.setState({
				hasError: true
		});
  };

	render() {
		const { city, hasError } = this.state;

		const errorMessage = hasError ? <ErrorIndicator /> : null;

		return(
			<div>
				{ errorMessage }
				<CityView city={ city } />
			</div>
		);
	};

};

const CityView = ({ city }) => {

	const { name, temp } = city;

	return (
		<React.Fragment>
			<div className="city" id="city">
				<div className="col s8">
					<div className="city-wrap">
						<div className="city-info">
							<span className="city-info__temperature">
								{ temp } &#176;
							</span>
							<span className="city-info__name">
								{ name }
							</span>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);

};