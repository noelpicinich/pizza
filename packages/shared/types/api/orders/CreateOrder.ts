import PizzaSize from '../../enums/PizzaSize';
import PizzaHalf from '../../enums/PizzaHalf';
import IApiResponse from '../IApiResponse';

export namespace CreateOrder {

    export interface Request {
        email: string;
        pizzas: {
            size: PizzaSize;
            toppings: {
                toppingId: number;
                half?: PizzaHalf;
            }[];
        }[];
    }

    export type Response = IApiResponse<undefined>;
}