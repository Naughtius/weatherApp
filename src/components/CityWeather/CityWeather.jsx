import React, { Component } from 'react';

import './CityWeather.css';

import openWeatherService from '../../services/openWeatherService';

export default class CityWeather extends Component {

	openWeatherService = new openWeatherService();

	state = {
		city: {}
	};

	componentDidMount() {
		  this.updatePerson();
    };

	updatePerson() {
        this.openWeatherService.getCity('Kazan').then(city => {
            this.setState({ 
                city
            });
        });
    };

	render() {
		const { city } = this.state;

		return(
			<CityView city={ city } />
		)
	}

}

const CityView = ({ city }) => {

	const { clouds, coord_el, coord_nl, feels_like, id, language, name, temp, temp_max, temp_min } = city;

	const k2c = k => k - 273.15; // from kelvin to celsius (temperature)

	console.log(clouds, coord_el, coord_nl, feels_like, id, language, name, temp, temp_max, temp_min);
	const temperature = k2c(temp);

    return (
        <React.Fragment>
			<div className="city" id="city">
				<div className="col s8">
					<div className="city-wrap">
						<div className="city-info">
							<span className="city-info__temperature">
								{ temperature } &#176;
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