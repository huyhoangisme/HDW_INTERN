import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Student } from 'models';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { dashboardActions } from './dashboardSlice';

export interface DashBoardProps {}
export const DashBoard = (props: DashBoardProps) => {
	const dispatch = useAppDispatch();
	const [studentList, setStudentList] = useState<Student[]>([]);
	const studentLists: Student[] = useAppSelector((state) => state.dashboard.studentList);
	useEffect(() => {
		dispatch(dashboardActions.getAllStudentStart());
	}, []);
	useEffect(() => {
		dispatch(dashboardActions.getAllStudentStart());
		setStudentList(studentLists);
	}, [studentLists]);

	let handleDeleteStudent = (student: Student) => {
		dispatch(dashboardActions.deleteStudentStart(student.id as String));
	};

	return (
		<div className="container  grid grid-cols-12 mt-10">
			<div className="flex flex-column ">
				<NavLink to="/dashboard/news" className="px-4 py-2">
					Tin Tức
				</NavLink>
				<NavLink to="dashboad/detail" className="px-4 py-2">
					Chi tiết
				</NavLink>
			</div>
			<table className="table-auto  w-full text-center col-start-2 col-span-11">
				<thead className="border border-slate-300">
					<tr className="py-4">
						<th>Name</th>
						<th>Age</th>
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
									<td>{student.mark}</td>
									<td>
										<button
											className="px-3 border border-solid bg-teal-500 mr-2 rounded"
											onClick={() => handleDeleteStudent(student)}
										>
											Delete
										</button>
										<Link
											to={`/dashboard/${student.id}/edit`}
											className="px-3 border border-solid bg-yellow-500 rounded"
										>
											Update
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};
