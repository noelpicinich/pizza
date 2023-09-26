import PizzaSize from "../enums/PizzaSize";
import ITopping from "./ITopping";

export default interface IPizza {
    id: number;
    orderId: number;
    size: PizzaSize;
    createdAt: Date | string;
    toppings?: ITopping[]
}