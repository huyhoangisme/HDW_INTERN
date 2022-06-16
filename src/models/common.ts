
export interface Pagination {
    _limits:number;
    _page:number;
    _totalRows:number;
}
export interface ListResponse<T> {
    data:T[],
    pagination:Pagination
}