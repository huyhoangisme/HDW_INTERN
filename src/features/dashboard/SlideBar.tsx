import { NavLink } from 'react-router-dom';

export interface SlideBarProps {}
export const SlideBar = (props: SlideBarProps) => {
	return (
		<div className="grid grid-cols-6 px-6 h-screen">
			<div className="border-r border-solid border-slate-200">
				<NavLink to="/admin/dashboard" activeClassName="text-indigo-600">
					<div className="cursor-pointer py-1">Dashboard</div>
				</NavLink>
				<NavLink to="/admin/student" activeClassName="text-indigo-600">
					<div className="cursor-pointer py-1 ">Students</div>
				</NavLink>
			</div>
			
		</div>
	);
};
