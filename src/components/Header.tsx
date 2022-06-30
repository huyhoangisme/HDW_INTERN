import { useAuthContext } from 'features/auth/authContext';
import { NavLink, useHistory } from 'react-router-dom';

export const Header = () => {
	const { logOut } = useAuthContext();
	const history = useHistory();
	const handleLogout = () => {
		logOut();
		history.push('/login');
	};

	return (
		<div className="bg-amber-200">
			<div className="container flex  px-10 py-2">
				<div className="flex-1">
					<NavLink to="/dashboard" activeClassName="text-indigo-600" className="px-4  text-lg">
						Dashboard
					</NavLink>
					<NavLink to="/student" activeClassName="text-indigo-600" className="px-4  text-lg">
						Student
					</NavLink>
					<NavLink to="/contact" activeClassName="text-indigo-600" className="px-4  text-lg">
						Contact
					</NavLink>
				</div>
				<button className="bg-blue-500 px-3 py-1" onClick={() => handleLogout()}>
					Log Out
				</button>
			</div>
		</div>
	);
};
