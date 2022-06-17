import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';

export interface HeaderProps {}
export const Header = (props: HeaderProps) => {
	const dispatch = useAppDispatch();
	let handleLogout = () => {
		dispatch(authActions.logOut());
	};
	return (
		<div className="bg-amber-200">
			<div className="container flex justify-end px-6 py-2">
				<div className="text-center text-4xl flex-1">Dashboard</div>
				<button className="bg-blue-500 px-4" onClick={() => handleLogout()}>
					Log Out
				</button>
			</div>
		</div>
	);
};
