import OrderStatus from '../../enums/OrderStatus';
import IApiResponse from '../IApiResponse';
import IOrder from '../../models/IOrder';

export namespace UpdateOrder {
    export interface Request {
        status: OrderStatus;
    }

    export type Response = IApiResponse<IOrder>;
}