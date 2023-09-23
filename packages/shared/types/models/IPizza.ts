import PizzaSize from "../enums/PizzaSize";

export default interface IPizza {
    id: number;
    orderId: number;
    size: PizzaSize;
    createdAt: Date | string;
}