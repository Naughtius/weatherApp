import allСities from './city.list.json'; 

export default class openWeatherService {

	_apiKey = '&appid=e38f15bedcd1a0097502d74d5fb90e97';
	_apiBase = `https://api.openweathermap.org/data/2.5/weather?q=`;

	getResource = async (cityName) => {
		const res = await fetch(`${this._apiBase}${cityName}${this._apiKey}`);

		if (!res.ok) {
				throw new Error(`Could not fetch ${cityName}, received ${res.status}`);
		}
		return await res.json();
	}

	getAllCity = () => {
		return this.sortArr(allСities);
	}

	getCity = async (cityName) => {
		const city = await this.getResource(cityName);
		return this._transformCity(city);
	};
	  
	_transformCity = (city) => {
		const k2c = k => k - 273.15;

		return {
			id: city.id,
			name: city.name,
			temp: Math.round(k2c(city.main.temp)),
			temp_max: city.main.temp_max,
			temp_min: city.main.temp_min,
			feels_like: city.main.feels_like,
			coord_nl: city.coord.lat,
			coord_el: city.coord.lon,
			clouds: city.clouds.all,
			language: city.sys.country
		}
	}

	sortArr = (arr) => {
		return arr.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
	}

}