import { ListParams, ListResponse, Students } from 'models';
import axios from './axios';

const studentApi = {
	getAllStudent(params: ListParams): Promise<ListResponse<Students>> {
		const url = '/students';
		return axios.get(url, 
			{params}
		);
	},
	getStudentById(id: string): Promise<Students> {
		const url = `/students/${id}`;
		return axios.get(url);
	},
	addNewStudent(data: Students): Promise<Students> {
		const url = '/students';
		return axios.post(url, { data });
	},
	updateStudent(data: Students): Promise<Students> {
		const url = `/students/${data.id}`;
		return axios.put(url, data);
	},
	removeStudent(id: string) {
		const url = `/students/${id}`;
		return axios.delete(url);
	},
};
export default studentApi;
