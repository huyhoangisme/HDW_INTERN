import Form from 'components/Form';
import InputField from 'components/InputField';
import { useAuthContext } from 'features/auth/authContext';
import { FormInputValues, User } from 'models';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const LoginPage = () => {
	const { isLoggedIn, login } = useAuthContext();
	const history = useHistory();
	useEffect(() => {
		if (isLoggedIn) {
			history.push('/dashboard');
		}
	}, [history, isLoggedIn]);
	const handleLogin = (data: FormInputValues) => {
		login(data as User);
	};

	return (
		<div className="flex items-center justify-center p-4">
			<div className="h-[400px] w-[300px] px-3 py-4 shadow-xl  border border-gray-200 rounded-md">
				<Form onSubmit={handleLogin}>
					<InputField name="email" />
					<InputField name="password" />
					<button type="submit" className="px-4 py-[2px] bg-orange-500 mt-4">
						Login
					</button>
				</Form>
				<div className="mt-3">
					<span>Bạn chưa có tài khoản</span>{' '}
					<Link to="/register" className="text-green-600">
						Đăng kí{' '}
					</Link>
				</div>
			</div>
		</div>
	);
};
