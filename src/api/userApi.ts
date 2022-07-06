import { User } from 'models';
import userAxios from './userAxios';

export interface loginState {
	email: string;
	password: string;
}
type registerState = {
	firstName: string;
	lastName: string;
} & loginState;
export interface UserResponse {
	errorCode: number;
	message: string;
	data: {
		user: User;
		accessToken: string;
	};
}
const userApi = {
	login(user: loginState): Promise<UserResponse> {
		const url = '/user/login';
		return userAxios.post(url, user);
	},
	getUserById(id: string): Promise<UserResponse> {
		const url = `/user/user-check?id=${id}`;
		// return userAxios.get(url,{

		// 	headers: {token: `Bearer ${localStorage.getItem('accessToken')}` }
		// })
		return userAxios.get(url);
	},
	register(user: registerState): Promise<UserResponse> {
		const url = '/user/register';
		return userAxios.post(url, user);
	},
};
export default userApi;
