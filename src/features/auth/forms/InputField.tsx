import { ErrorMessage } from '@hookform/error-message';
import { FormValues } from 'models';
import { useController, UseControllerProps } from 'react-hook-form';

export const placeholder = {
	firstName: 'Please enter your first name...',
	lastName: 'Please enter your last name...',
	password: 'Please enter your password...',
	email: 'Please enter your email...',
	age: 'Please enter your age...',
	mark: 'Please enter your mark...',
	name: 'Please enter your name',
};

const InputField = (props: UseControllerProps<FormValues>) => {
	const {
		field,
		formState: { errors },
	} = useController(props);
	return (
		<div className="flex flex-col">
			<label className="text-lg font-bold capitalize py-2">{props.name}</label>
			<input
				{...field}
				type={props.name === 'password' ? 'password' : 'text'}
				placeholder={placeholder[props.name]}
				className="border outline-0 px-2 py-1 rounded-md"
			/>
			<ErrorMessage
				errors={errors}
				name={props.name}
				render={({ message }) => <p className="text-red-600">{message}</p>}
			/>
		</div>
	);
};
export default InputField;
