import * as yup from 'yup';
export const SchemaRegister = yup.object().shape({
	firstName: yup.string().trim().required('This field is required'),
	lastName: yup.string().trim().required('This field is required'),
	email: yup
		.string()
		.trim()
		.required('This field is required')
		.matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, `This field isn't email`),
	password: yup
		.string()
		.trim()
		.required('This field is required')
		.min(8, 'Password must be at least 8 characters')
		.matches(/[a-zA-Z]/, 'Password must be at least one letter'),
});
