import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';
export interface LoginPageProps {}
export const LoginPage = (props: LoginPageProps) => {
	const dispatch = useAppDispatch();
	let handleLogin = () => {
		dispatch(
			authActions.login({
				email: '',
				password: '',
			})
		);
	};
	let handleLogout = () => {
		dispatch(authActions.logOut());
	};
	return (
		<div className="container">
			<h1>Student Login</h1>
			<button onClick={() => handleLogin()}>Login</button>
			<div>
				<button onClick={() => handleLogout()}>Logout</button>
			</div>
		</div>
	);
};
