
export interface Pagination {
    _limits:number;
    _page:number;
    _totalRows:number;
}
export interface ListResponse<T> {
    data:T[] ,
    pagination?:Pagination
}

export  interface FormValues{
    firstName?:string;
    lastName?:string;
    email?:string;
    password?:string;
    age?:number;
    mark?:number;
    name?:string;
}
