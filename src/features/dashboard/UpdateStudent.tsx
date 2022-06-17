import studentApi from 'api/studentApi';
import { useAppDispatch } from 'app/hooks';
import { Student } from 'models';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter } from 'utils';
import { dashboardActions } from './dashboardSlice';
export interface UpdateStudentProps {
	isOpen?: boolean;
	tonggle?: any;
}
export interface initialState {
	[key: string]: string | number;
	name: string;
	age: number;
	mark: number;
}
export const UpdateStudent = ({ isOpen, tonggle }: UpdateStudentProps) => {
	const dispatch = useAppDispatch();
	let [student, setStudent] = useState<initialState>({
		name: '',
		age: 0,
		mark: 0,
	});
	useEffect(() => {
		emitter.on('EVENT_UPDATE_STUDENT', (student: Student) => {
			let newStudent: initialState = {
				name: `${student.name}`,
				age: student.age,
				mark: student.mark,
				id: student.id,
				gender: student.gender,
			};
			setStudent(newStudent);
		});
	}, [student]);

	let handleToggle = () => {
		tonggle();
	};
	let handleChangeInput = (event: ChangeEvent<HTMLInputElement>, id: any) => {
		let studentCopy: initialState = student;
		studentCopy[id] = event.target.value;
		setStudent({ ...studentCopy });
	};
	let handleUpdateStudent = async (id: string) => {
		console.log(id, student);
		await studentApi.updateStudent(id, student as Student);
		dispatch(dashboardActions.fetchData());
        handleToggle();
	};
	return (
		<div>
			<Modal toggle={() => handleToggle()} isOpen={isOpen} size="lg">
				<ModalHeader toggle={() => handleToggle()}>Update Student</ModalHeader>
				{student && Object.keys(student).length !== 0 && (
					<>
						<ModalBody>
							<div className="form-content my-2">
								<div className="form-group">
									<div className="text-label">Name</div>
									<input
										type="text"
										value={student.name}
										className="form-control"
										onChange={(event) => handleChangeInput(event, 'name')}
									/>
								</div>
								<div className="form-group">
									<div className="text-label">Age</div>
									<input
										type="text"
										value={student.age}
										className="form-control"
										onChange={(event) => handleChangeInput(event, 'age')}
									/>
								</div>
							</div>
							<div className="form-content my-2">
								<div className="form-group">
									<div className="text-label">Mark</div>
									<input
										type="text"
										value={student.mark}
										className="form-control"
										onChange={(event) => handleChangeInput(event, 'mark')}
									/>
								</div>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								onClick={() => handleUpdateStudent(student.id as string)}
								active
								color="secondary"
							>
								Update
							</Button>
							<Button onClick={() => handleToggle()} active color="primary">
								Cancel
							</Button>
						</ModalFooter>
					</>
				)}
			</Modal>
		</div>
	);
};
