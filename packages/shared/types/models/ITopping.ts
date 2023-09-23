import ToppingType from '../enums/ToppingType';

export default interface ITopping {
    id: number;
    type: ToppingType;
    name: string;
    price: number;
    disabled: boolean;
}
