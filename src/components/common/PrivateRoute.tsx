import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}
export const PrivateRoute = (props: RouteProps) => {
	const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
	if (!isLoggedIn) return <Redirect to="/login" />;
	return <Route {...props} />;
};
