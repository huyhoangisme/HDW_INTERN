import { ListParams, ListResponse, Student } from 'models';
import axios from './axios';

const studentApi = {
	getAllStudent(params: ListParams): Promise<ListResponse<Student>> {
		const url = '/students';
		return axios.get(url, 
			{params}
		);
	},
	getStudentById(id: string): Promise<Student> {
		const url = `/students/${id}`;
		return axios.get(url);
	},
	addNewStudent(data: Student): Promise<Student> {
		const url = '/students';
		return axios.post(url, { data });
	},
	updateStudent(id: string, data: Student): Promise<Student> {
		const url = `/students/${id}`;
		return axios.put(url, data);
	},
	removeStudent(id: string): Promise<Boolean> {
		const url = `/students/${id}`;
		return axios.delete(url);
	},
};
export default studentApi;
