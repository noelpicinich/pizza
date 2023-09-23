import { InferCreationAttributes } from 'sequelize';
import { Table, Column, Model, DataType, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import PizzaHalf from 'shared/types/enums/PizzaHalf';
import IPizzaTopping from 'shared/types/models/IPizzaTopping';
import Pizza from './Pizza.model';
import Topping from './Topping.model';


@Table({
    tableName: 'pizza_toppings',
    underscored: true,
    timestamps: false
})
export default class PizzaTopping extends Model<IPizzaTopping, InferCreationAttributes<PizzaTopping>> {
    @ForeignKey(() => Pizza)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER.UNSIGNED
    })
    public pizzaId: number;

    @ForeignKey(() => Topping)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER.UNSIGNED
    })
    public toppingId: number;

    @Column({
        type: DataType.STRING(10)
    })
    public half: PizzaHalf | null;

    @BelongsTo(() => Pizza)
    public pizza: Pizza;

    @BelongsTo(() => Topping)
    public topping: Topping;
}
