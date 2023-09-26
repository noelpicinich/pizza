import IApiResponsePaginated from "../IApiResponsePaginated";
import IApiPaginationParams from "../IApiPaginationParams";
import OrderStatus from '../../enums/OrderStatus';
import IOrder from "../../models/IOrder";

export namespace ListOrders {
    export type SortByColumn = 'id' | 'status' | 'isDelivery' | 'createdAt' | 'completedAt' | 'cancelledAt';

    export interface Params extends IApiPaginationParams<SortByColumn> {
        filters?: {
            isCancelled?: boolean;
            isDelivery?: boolean;
            status?: OrderStatus;
        }
    };

    export interface Request {};

    export type Response = IApiResponsePaginated<IOrder>;
}