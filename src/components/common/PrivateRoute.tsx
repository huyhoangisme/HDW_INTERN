import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}
export const PrivateRoute = (props: RouteProps) => {
	// chua dang nhap thi vao trang login con dang nhap roi thi cho di vao trang muon di
	const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
	if (!isLoggedIn) return <Redirect to="/login" />;
	return <Route {...props} />;
};
