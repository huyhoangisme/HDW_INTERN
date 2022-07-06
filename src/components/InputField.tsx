import { ErrorMessage } from '@hookform/error-message';
import { FormInputValues } from 'models';
import { useController, UseControllerProps } from 'react-hook-form';

type InputFieldProps = {
	name: string;
} & UseControllerProps<FormInputValues>;
export const placeholder = {
	firstName: 'Please enter your first name...',
	lastName: 'Please enter your last name...',
	password: 'Please enter your password...',
	email: 'Please enter your email...',
	age: 'Please enter your age...',
	mark: 'Please enter your mark...',
	name: 'Please enter your name',
};

const InputField = (props : InputFieldProps) => {
	const {
		field,
		formState: { errors },
	} = useController<FormInputValues>(props);
	return (
		<div className="flex flex-col">
			<label className="text-lg font-bold capitalize py-2">{props.name}</label>
			<input
				{...field}
				placeholder={placeholder[props.name]}
				type={props.name === 'password' ? 'password' : 'text'}
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
