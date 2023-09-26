import { CreationOptional, InferCreationAttributes } from 'sequelize';
import {
    Table,
    Column,
    HasMany,
    Model,
    DataType,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    CreatedAt,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript';
import OrderStatus from 'shared/types/enums/OrderStatus';
import IOrder from 'shared/types/models/IOrder';
import Customer from './Customer.model';
import Pizza from './Pizza.model';

@Table({
    tableName: 'orders',
    underscored: true,
    timestamps: true,
    updatedAt: false
})
export default class Order extends Model<
    IOrder,
    InferCreationAttributes<Order>
> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    public id: CreationOptional<number>;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER
    })
    public customerId: number | null;

    @Column({
        type: DataType.INTEGER
    })
    public paymentId: number | null;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    public status: OrderStatus;

    @AllowNull(false)
    @Column({
        type: DataType.BOOLEAN
    })
    public isDelivery: boolean;

    @Column({
        type: DataType.INTEGER
    })
    public deliveryAddressId: number | null;

    @CreatedAt
    @AllowNull(false)
    @Column({
        type: 'TIMESTAMP'
    })
    public createdAt: CreationOptional<Date | string>;

    @Column({
        type: 'TIMESTAMP'
    })
    public completedAt: CreationOptional<Date | string>;

    @Column({
        type: 'TIMESTAMP'
    })
    public cancelledAt: CreationOptional<Date | string>;

    public formatForAPI(): IOrder {
        return {
            id: this.id,
            customerId: this.customerId,
            paymentId: this.paymentId,
            status: this.status,
            isDelivery: this.isDelivery,
            deliveryAddressId: this.deliveryAddressId,
            createdAt: this.createdAt,
            completedAt: this.completedAt,
            cancelledAt: this.cancelledAt,
            ...this.pizzas && {
                pizzas: this.pizzas.map(pizza => pizza.formatForAPI())
            }
        };
    }

    @BelongsTo(() => Customer)
    public customer?: Customer;

    @HasMany(() => Pizza)
    public pizzas?: Pizza[];
}
