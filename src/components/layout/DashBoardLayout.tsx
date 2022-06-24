import { Header } from 'components/common';
import { AuthContext } from 'features/auth/AuthContext';
import { DashBoard, UpdateStudent } from 'features/dashboard';
import DashBoardNews from 'features/dashboard/DashBoardNews';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

export const dashboardRoute = [
	{
		path: '/dashboard',
		component: <DashBoard />,
	},
	{
		path: '/dashboard/news',
		component: <DashBoardNews />,
	},
    {
        path:'/dashboard/:id/edit',
        component: <UpdateStudent/>
    }
];

const DashBoardLayout = () => {
	const authContext = useContext(AuthContext);
	return (
		<div>
			{authContext.isLoggedIn ? <Header></Header> : ''}
			<Switch>
				{dashboardRoute &&
					dashboardRoute.length > 0 &&
					dashboardRoute.map((item, index) => {
						return <Route path={item.path} exact>{item.component}</Route>;
					})}
			</Switch>
		</div>
	);
};
export default DashBoardLayout;
