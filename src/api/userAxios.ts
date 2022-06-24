import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
	baseURL: `http://localhost:8080/api/v1`,
	headers: {
		'content-type': 'application/json',
	},
});
instance.interceptors.request.use(
	function (config: AxiosRequestConfig) {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	function (response: AxiosResponse) {
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default instance;
