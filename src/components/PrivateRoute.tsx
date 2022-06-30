import { useAuthContext } from 'features/auth/authContext';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = (props: RouteProps) => {
	const { isLoggedIn, loading } = useAuthContext();
	if (loading) return null;

	if (isLoggedIn) return <Route {...props} />;
	return <Redirect to="/login" />;
};
