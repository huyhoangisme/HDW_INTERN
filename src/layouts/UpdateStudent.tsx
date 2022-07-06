import { useAppDispatch, useAppSelector } from 'app/hooks';
import Form from 'components/Form';
import InputField from 'components/InputField';
import {
	dashboardActions,
	selectorLoading,
	selectorStudentById,
} from 'features/dashboard/dashboardSlice';

import { Students } from 'models';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export const UpdateStudent = () => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const newStudent = useAppSelector(selectorStudentById);
	const loading = useAppSelector<boolean>(selectorLoading);
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		if (!loading) dispatch(dashboardActions.getStudentByID(id));
	}, [dispatch, loading, id]);
	const handleToggle = () => {
		setIsOpen(!isOpen);
		history.push('/dashboard');
	};
	const handleUpdateStudent = (data: Students) => {
		const student = {
			...data,
			id: id,
		};
		dispatch(dashboardActions.updateStudentByIDStart(student));
	};
	return (
		<div>
			<Modal toggle={() => handleToggle()} isOpen={isOpen} size="lg">
				<ModalHeader toggle={() => handleToggle()}>Update Students</ModalHeader>
				<>
					<ModalBody>
						<Form onSubmit={handleUpdateStudent} defaultValues={newStudent}>
							<InputField name="name" />
							<InputField name="age" />
							<InputField name="mark" />
							<ModalFooter>
								<Button active color="secondary" type="submit">
									Update
								</Button>
								<Button onClick={() => handleToggle()} active color="primary">
									Cancel
								</Button>
							</ModalFooter>
						</Form>
					</ModalBody>
				</>
			</Modal>
		</div>
	);
};
