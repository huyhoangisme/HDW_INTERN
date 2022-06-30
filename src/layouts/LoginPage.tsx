import InputField from 'components/InputField';
import { useAuthContext } from 'features/auth/authContext';
import { FormValues, User } from 'models';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export interface LoginPageProps {}
export const LoginPage = (props: LoginPageProps) => {
	const { control, handleSubmit } = useForm<FormValues>();
	const { isLoggedIn, login } = useAuthContext();
	const history = useHistory();
	useEffect(() => {
		if (isLoggedIn) {
			history.push('/dashboard');
		}
	}, [history, isLoggedIn]);
	let handleLogin = (data: FormValues) => {
		login(data as User);
	};
	return (
		<div className="flex items-center justify-center p-4">
			<div className="h-[400px] w-[300px] px-3 py-4 shadow-xl  border border-gray-200 rounded-md">
				<form onSubmit={handleSubmit(handleLogin)}>
					<InputField control={control} name="email" />
					<InputField control={control} name="password" />
					<button type="submit" className="px-4 py-[2px] bg-orange-500 mt-4">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
