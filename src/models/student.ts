export interface Student {
	[key: string]: string | number;
	id: string;
	name: string;
	age: number;
	mark: number;
	gender: 'male' | 'female';
	city: string;
	createdAt: string;
	updatedAt: string;
}
export interface ListParams {
	_page?: number;
	_limit?: number;
	_sort?: string;
	_order?: 'desc' | 'asc';
	[key: string]: any;
}
