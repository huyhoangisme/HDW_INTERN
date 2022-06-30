import { useAppDispatch, useAppSelector } from 'app/hooks';
import { dashboardActions, selectorStudentList } from 'features/dashboard/dashboardSlice';
import { Students } from 'models';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface DashBoardProps {}
export const DashBoard = (props: DashBoardProps) => {
	const dispatch = useAppDispatch();
	const studentList = useAppSelector<Students[]>(selectorStudentList);
	const params = {
		_page: 1,
		_limits: 10,
	};
	useEffect(() => {
		dispatch(dashboardActions.getAllStudentStart(params));
	}, [dispatch]);

	const handleDeleteStudent = (student: Students) => {
		if (!student.id) return undefined;
		dispatch(dashboardActions.deleteStudentStart(student.id));
	};

	return (
		<div className="container  grid grid-cols-12 mt-10">
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
					{studentList?.map((student, index) => {
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
