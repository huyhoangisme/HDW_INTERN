import { useAppSelector } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

function App() {
	const loginSucess = useAppSelector((state) => state.auth.isLoggedIn);
	const history = useHistory();
	useEffect(() => {
		if (loginSucess) {
			history.push('/admin');
		}
		
	}, [loginSucess]);
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
