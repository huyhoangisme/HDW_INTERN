
export interface PaginationValues {
    _limit:number;
    _page:number;
    _totalRows:number;
}
export interface ListResponse<T> {
    data:T[] ,
    pagination?:PaginationValues
}

export  interface FormInputValues{
    firstName?:string;
    lastName?:string;
    email?:string;
    password?:string;
    age?:number;
    mark?:number;
    name?:string;
}
