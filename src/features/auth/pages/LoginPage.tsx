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
	
	return (
		<div className="container flex  flex-col justify-center items-center px-6">
			<h1 className = "text-center text-4xl text-bold py-4">Student Login</h1>
			<button onClick={() => handleLogin()} className=" bg-pink-700 px-4 text-xl w-fit ">Login</button>
		</div>
	);
};
