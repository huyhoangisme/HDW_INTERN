import { Students } from 'models';
export interface StudentListProps {
	studentList: Students[];
}
const StudentList = ({ studentList }: StudentListProps) => {
	return (
		<div className=" flex  justify-center mt-6">
			{studentList?.map((student, index) => {
				return (
					<div className="px-2" key={index}>
						<div className="px-2 py-4  w-[120px] h-[180px] text-center border !border-yellow-400 rounded shadow-xl">
							<div className="font-bold">Name</div>
							<div className="">{student.name}</div>
							<div>
								<div className="font-bold">Age</div>
								<div>{student.age}</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default StudentList;
