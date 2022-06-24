import 'bootstrap/dist/css/bootstrap.min.css';
import { NotFound } from 'components/common';
import DashBoardLayout from 'components/layout/DashBoardLayout';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { Route, Switch } from 'react-router-dom';

function App() {

	return (
		<div className="App">
			
			<Switch>
				<Route path="/" exact></Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/dashboard">
					<DashBoardLayout />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
