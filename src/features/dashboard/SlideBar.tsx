import { useAppDispatch } from 'app/hooks';
import { NavLink, Route, Switch } from 'react-router-dom';
import { DashBoard } from './DashBoard';
import { dashboardActions } from './dashboardSlice';
import { Student } from './Student';

export interface SlideBarProps {}
export const SlideBar = (props: SlideBarProps) => {
    const dispatch = useAppDispatch();
    let handleClickDashboard = () => {
        dispatch(dashboardActions.fetchData());
    }
	return (
		<div className="grid grid-cols-6 px-6 h-screen">
			<div className="border-r border-solid border-slate-200">
				<NavLink to="/admin/dashboard" activeClassName="text-indigo-600">
					<div className="cursor-pointer py-1" onClick={() => handleClickDashboard()}>Dashboard</div>
				</NavLink>
				<NavLink to="/admin/student" activeClassName="text-indigo-600">
					<div className="cursor-pointer py-1">Students</div>
				</NavLink>
			</div>
			<div className="col-start-2 col-end-7">
				<Switch>
					<Route path="/admin/dashboard">
						<DashBoard />
					</Route>
					<Route path="/admin/student">
						<Student />
					</Route>
				</Switch>
			</div>
		</div>
	);
};
