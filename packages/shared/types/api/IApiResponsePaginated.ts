export default interface IApiResponsePaginated<T> {
    message?: string;
    data: {
        page: number;
        pageSize: number;
        rows: T[];
        total: number;
    }
}