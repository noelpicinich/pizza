import { CreationOptional, InferCreationAttributes } from 'sequelize';
import {
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    CreatedAt,
    HasMany,
    BelongsTo,
    BelongsToMany,
    ForeignKey
} from 'sequelize-typescript';
import PizzaSize from 'shared/types/enums/PizzaSize';
import IPizza from 'shared/types/models/IPizza';
import Topping from './Topping.model';
import Order from './Order.model';
import PizzaTopping from './PizzaTopping.model';

@Table({
    tableName: 'pizzas',
    underscored: true,
    timestamps: true,
    updatedAt: false
})
export default class Pizza extends Model<
    IPizza,
    InferCreationAttributes<Pizza>
> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    public id: CreationOptional<number>;

    @ForeignKey(() => Order)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    public orderId: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    public size: PizzaSize;

    @CreatedAt
    @AllowNull(false)
    @Column({
        type: 'TIMESTAMP'
    })
    public createdAt: CreationOptional<Date | string>;

    @BelongsTo(() => Order)
    public order?: Order;

    @BelongsToMany(() => Topping, () => PizzaTopping)
    public toppings?: Topping[];

    public formatForAPI(): IPizza {
        return {
            id: this.id,
            orderId: this.orderId,
            size: this.size,
            createdAt: this.createdAt,
            ...this.toppings && {
                toppings: this.toppings.map(topping => topping.formatForAPI())
            }
        }
    }
}
