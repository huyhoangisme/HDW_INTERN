import studentApi from 'api/studentApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Student } from 'models';
import { useEffect, useState } from 'react';
import { dashboardActions } from './dashboardSlice';

export interface DashBoardProps {}
export const DashBoard = (props: DashBoardProps) => {
	const dispatch = useAppDispatch();
	const [studentList, setStudentList] = useState<Student[]>([]);
	const studentLists: Student[] = useAppSelector((state) => state.dashboard.studentList);
	useEffect(() => {
		setStudentList(studentLists);
	}, [studentLists]);

	let handleDeleteStudent = async(student:Student) => {
		await studentApi.removeStudent(student.id)
		dispatch(dashboardActions.deleteStudentList(student));
		
	};
	return (
		<div className="container px-6 mt-10">
			<table className="table-auto w-full text-center">
				<thead className="border border-slate-300">
					<tr className="py-4">
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Mark</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{studentList &&
						studentList.length > 0 &&
						studentList.map((student, index) => {
							return (
								<tr className="border border-slate-300" key={index}>
									<td>{student.name}</td>
									<td>{student.age}</td>
									<td>{student.gender}</td>
									<td>{student.mark}</td>
									<td>
										<button
											className="px-3 border border-solid bg-teal-500 mr-2 rounded"
											onClick={() => handleDeleteStudent(student)}
										>
											Delete
										</button>
										<button className="px-3 border border-solid bg-yellow-500 rounded">
											Update
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};
