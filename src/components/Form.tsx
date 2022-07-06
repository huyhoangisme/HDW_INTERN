import { FormInputValues } from 'models';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
interface FormProps {
	children: React.ReactNode;
	onSubmit: (data: FormInputValues) => void;
	defaultValues?: FormInputValues;
	validationSchema?: any;
}
const Form = ({ children, onSubmit, defaultValues, validationSchema }: FormProps) => {
	const formMethods = useForm<FormInputValues>({
		defaultValues,
		resolver: validationSchema ? yupResolver(validationSchema) : undefined,
	});
	return (
		<FormProvider {...formMethods}>
			<form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
};
export default Form;
