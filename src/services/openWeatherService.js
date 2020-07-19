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

	getCity = async (name) => {
		const person = await this.getResource(name);
		return this._transformCity(person);
	};
	  
	_transformCity = (city) => {
		return {
				id: city.id,
				name: city.name,
				temp: city.main.temp,
				temp_max: city.main.temp_max,
				temp_min: city.main.temp_min,
				feels_like: city.main.feels_like,
				coord_nl: city.coord.lat,
				coord_el: city.coord.lon,
				clouds: city.clouds.all,
				language: city.sys.country
		}
	}

}