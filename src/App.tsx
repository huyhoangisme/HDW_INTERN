import studentApi from 'api/studentApi';
import { NotFound, PrivateRoute } from 'components/common';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
	useEffect(() => {
		studentApi.getStudentById('sktwi1cgkkuif36f5').then((student) => console.log(student));
	}, []);
	return (
		<div className="App">
			<Switch>
				<Route path="/login">
					<LoginPage />
				</Route>
				<PrivateRoute path="/admin"></PrivateRoute>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
