import { useAppSelector } from 'app/hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
	const loginSucess = useAppSelector((state) => state.auth.isLoggedIn);
	const accessToken = Boolean(localStorage.getItem('accessToken'));
	const history = useHistory();
	useEffect(() => {
		if (loginSucess || accessToken) {
			history.push('/admin');
		}
	}, [loginSucess, accessToken]);
	return (
		<div className="App">
			<Switch>
				<Route path="/login" exact>
					<LoginPage />
				</Route>
				<PrivateRoute path="/admin">
					<AdminLayout />
				</PrivateRoute>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
