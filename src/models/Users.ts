export interface User {
	id?: String | Number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	gender: 'male' | 'female';
	phone?: string;
}
