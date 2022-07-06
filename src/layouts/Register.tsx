import userApi from 'api/userApi';
import Form from 'components/Form';
import InputField from 'components/InputField';
import { SchemaRegister } from 'components/Validation';
import { FormInputValues } from 'models';
import { useHistory } from 'react-router-dom';

export const Register = () => {
	const history = useHistory();
	const handleRegister = async (data: FormInputValues) => {
		const { firstName, lastName, email, password } = data;
		if (!firstName || !lastName || !email || !password) return;
		const response = await userApi.register({
			firstName,
			lastName,
			email,
			password,
		});
		if (response.errorCode === 0) {
			alert('Register success...');
			history.push('/login');
		} else alert('Register failed...');
	};
	const defaultValues = {
		email: 'abc@gmail.com',
		lastName: 'Huy Hoang',
		firstName: 'Tran',
		password: '............',
	};
	return (
		<div className="mx-40 mt-10">
			<Form
				onSubmit={handleRegister}
				defaultValues={defaultValues}
				validationSchema={SchemaRegister}
			>
				<InputField name="firstName" />
				<InputField name="lastName" />
				<InputField name="email" />
				<InputField name="password" />
				<button type="submit" className="float-right py-1 px-3 mt-3 border bg-blue-500">
					Đăng kí
				</button>
			</Form>
		</div>
	);
};
