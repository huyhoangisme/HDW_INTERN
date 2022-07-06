import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, NotFound, PrivateRoute } from 'components';
import DashBoardLayout from 'components/DashBoardLayout';

import { LoginPage } from 'layouts/LoginPage';
import { Register } from 'layouts/Register';
import Student from 'layouts/Student';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact></Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<PrivateRoute path="/dashboard">
					<DashBoardLayout />
				</PrivateRoute>
				<PrivateRoute path="/student">
					<Student />
				</PrivateRoute>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
