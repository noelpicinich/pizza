import IApiResponsePaginated from "../IApiResponsePaginated";
import IApiPaginationParams from "../IApiPaginationParams";
import ToppingType from '../../enums/ToppingType';

export namespace ListToppings {
    export type SortByColumn = 'id' | 'name' | 'type' | 'price' | 'disabled';

    export interface Params extends IApiPaginationParams<SortByColumn> {};

    export interface Request {};

    export type Response = IApiResponsePaginated<{
        type: ToppingType;
        name: string;
        price: number;
    }>;
}