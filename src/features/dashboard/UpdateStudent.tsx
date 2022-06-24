import { useAppDispatch, useAppSelector } from 'app/hooks';
import InputField from 'features/auth/forms/InputField';
import { FormValues, Student } from 'models';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import * as yup from 'yup';
import { dashboardActions } from './dashboardSlice';
export interface initialState {
	[key: string]: string | number;
	name: string;
	age: number;
	mark: number;
}
export const UpdateStudent = () => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const newStudent: Student = useAppSelector((state) => state.dashboard.student);
	const loading: Boolean = useAppSelector((state) => state.dashboard.loading);
	let [student, setStudent] = useState<Student>({
		name: '',
		age: 0,
		mark: 0,
	});
	let [isOpen, setIsOpen] = useState<boolean>(true);

	const schema = yup.object().shape({
		firstName: yup
			.string()
			.trim()
			.max(30, 'Trường này không được quá 30 kí tự ')
			.min(2)
			.required('Vui lòng nhập trường này'),
		lastName: yup
			.string()
			.trim()
			.max(30, 'Trường này không được quá 30 kí tự ')
			.min(2)
			.required('Vui lòng nhập trường này'),
		email: yup
			.string()
			.trim()
			.matches(
				/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				'Trường này không phải email'
			)
			.required('Vui lòng nhập trường này'),
		password: yup
			.string()
			.trim()
			.min(8, 'Mật khẩu phải nhiều hơn 8 kí tự')
			.matches(/^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/, 'Mật khẩu phải có chữ số')
			.required('Vui lòng nhập trường này'),
		name: yup
			.string()
			.trim()
			.max(30, 'Trường này không được quá 30 kí tự')
			.required('Vui lòng nhập trường này'),
		mark: yup
			.number()
			.max(10, 'Điểm số trong khoảng 0-10 điểm')
			.min(0, 'Điểm số trong khoảng 0-10 điểm')
			.required('Vui lòng nhập trường này'),
		age: yup.number().min(0, 'Tuổi phải là số âm'),
	});

	const { handleSubmit, control, reset } = useForm<FormValues>({
	});
	const { id } = useParams<any>();

	useEffect(() => {
		dispatch(dashboardActions.getStudentByIDStart(id));
	}, []);
	useEffect(() => {
		reset({ ...student });
	}, [student]);

	useEffect(() => {
		setStudent({
			name: `${newStudent.name}`,
			age: newStudent.age,
			mark: newStudent.mark,
		});
	}, [newStudent]);

	let handleToggle = () => {
		setIsOpen(!isOpen);
		history.push('/dashboard');
	};
	let handleLogin = async (data: Student) => {
		let student = {
			...data,
			id: id,
		};
		dispatch(dashboardActions.updateStudentByIDStart(student));
		if (loading === false) history.push('/dashboard');
	};
	return (
		<div>
			<Modal toggle={() => handleToggle()} isOpen={isOpen} size="lg">
				<ModalHeader toggle={() => handleToggle()}>Update Student</ModalHeader>
				<>
					<ModalBody>
						<form onSubmit={handleSubmit(handleLogin)}>
							<InputField control={control} name="name" />
							<InputField control={control} name="age" />
							<InputField control={control} name="mark" />
							<ModalFooter>
								<Button active color="secondary" type="submit">
									Update
								</Button>
								<Button onClick={() => handleToggle()} active color="primary">
									Cancel
								</Button>
							</ModalFooter>
						</form>
					</ModalBody>
				</>
			</Modal>
		</div>
	);
};
