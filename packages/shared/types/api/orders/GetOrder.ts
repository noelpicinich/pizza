import IOrder from "../../models/IOrder";
import IApiResponse from '../IApiResponse';

export namespace GetOrder {
    export interface Request {}

    export type Response = IApiResponse<IOrder>;
}