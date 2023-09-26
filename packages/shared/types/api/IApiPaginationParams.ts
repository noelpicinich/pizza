import SortDirection from "../other/SortDirection";

export default interface IApiPaginationParams<SortByColumn> {
    page?: number;
    pageSize?: number;
    sortBy?: SortByColumn;
    sortDirection?: SortDirection;
    query?: string;
}