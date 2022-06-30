export interface Students {
	
	id?: string;
	name?: string;
	age?: number;
	mark?: number;
	city?: string;
	createdAt?: string;
	updatedAt?: string;
}
export interface ListParams {
	_page?: number;
	_limits?: number;
	_sort?: string;
	_order?: 'desc' | 'asc';
	[key: string]: any;
}
