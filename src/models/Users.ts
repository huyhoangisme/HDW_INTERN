export interface User {
	id?: string | number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	gender: 'male' | 'female';
	phone?: string;
}
