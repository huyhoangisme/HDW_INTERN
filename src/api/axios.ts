import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
	baseURL: `http://js-post-api.herokuapp.com/api`,
	headers: {
		'content-type': 'application/json',
	},
});
instance.interceptors.request.use(
	function (config: AxiosRequestConfig) {
		// Do something before request is sent
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	function (response: AxiosResponse) {
		return response.data;
	},
	(error) => {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);
export default instance;
