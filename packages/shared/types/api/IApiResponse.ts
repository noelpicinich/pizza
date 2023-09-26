export default interface IApiResponse<T> {
    message?: string;
    data?: T
}