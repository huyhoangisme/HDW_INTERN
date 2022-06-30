import { DashBoard } from 'layouts/DashBoard';
import { UpdateStudent } from 'layouts/UpdateStudent';

import { Route, Switch } from 'react-router-dom';

const DashBoardLayout = () => {
	return (
		<>
			<DashBoard />
			<Switch>
				<Route path="/dashboard/:id/edit">
					<UpdateStudent />
				</Route>
			</Switch>
		</>
	);
};
export default DashBoardLayout;
