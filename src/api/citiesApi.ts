import { City, ListResponse } from '../models/index';
import axios from '../api/axios';

const citiesApi = {
	 getAllCities(): Promise<ListResponse<City>>  {
		const url = '/cities';
		return axios.get(url);
	}
}


export default citiesApi;
