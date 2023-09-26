import PizzaHalf from "../enums/PizzaHalf";

export default interface IPizzaTopping {
    pizzaId: number;
    toppingId: number;
    half: PizzaHalf | null;
}