import { useAppDispatch, useAppSelector } from 'app/hooks';
import InputField from 'components/InputField';
import {
	dashboardActions,
	selectorLoading,
	selectorStudentById,
} from 'features/dashboard/dashboardSlice';

import { FormValues, Students } from 'models';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export const UpdateStudent = () => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const newStudent = useAppSelector(selectorStudentById);
	const loading = useAppSelector<boolean>(selectorLoading);
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const { id } = useParams<any>();
	const { handleSubmit, control, reset } = useForm<FormValues>({
		defaultValues: newStudent,
	});

	useEffect(() => {
		if (!loading) dispatch(dashboardActions.getStudentByID(id));
		reset(newStudent);
	}, [dispatch, loading, id, reset, newStudent]);
	const handleToggle = () => {
		setIsOpen(!isOpen);
		history.push('/dashboard');
	};
	const handleUpdateStudent =  (data: Students) => {
		let student = {
			...data,
			id: id,
		};
		dispatch(dashboardActions.updateStudentByIDStart(student));
	};

	// console.log('loading', loading);
	// console.log('new student', newStudent);
	// if (loading) return null;
	return (
		<div>
			<Modal toggle={() => handleToggle()} isOpen={isOpen} size="lg">
				<ModalHeader toggle={() => handleToggle()}>Update Students</ModalHeader>
				<>
					<ModalBody>
						<form onSubmit={handleSubmit(handleUpdateStudent)}>
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
