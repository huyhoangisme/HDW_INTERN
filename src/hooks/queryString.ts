import { useLocation } from 'react-router-dom';

export const useQueryString = (name: string) => {
	const location = useLocation();
	const queryString = new URLSearchParams(location.search);
	return parseInt(queryString.get(name)!);
};
