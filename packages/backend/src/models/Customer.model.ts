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
    UpdatedAt,
    HasMany
} from 'sequelize-typescript';
import ICustomer from 'shared/types/models/ICustomer';
import CustomerAddress from './CustomerAddress.model';
import Order from './Order.model';

@Table({
    tableName: 'customers',
    underscored: true,
    timestamps: true
})
export default class Customer extends Model<
    ICustomer,
    InferCreationAttributes<Customer>
> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    public id: CreationOptional<number>;

    @Column({
        type: DataType.STRING(50)
    })
    public firstName: CreationOptional<string>;

    @Column({
        type: DataType.STRING(50)
    })
    public lastName: CreationOptional<string>;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(255)
    })
    public email: string;

    @Column({
        type: DataType.STRING(20)
    })
    public phoneNumber: CreationOptional<string>;

    @CreatedAt
    @AllowNull(false)
    @Column({
        type: 'TIMESTAMP'
    })
    public createdAt: CreationOptional<Date | string>;

    @UpdatedAt
    @AllowNull(false)
    @Column({
        type: 'TIMESTAMP'
    })
    public updatedAt: CreationOptional<Date | string>;

    @HasMany(() => CustomerAddress)
    public addresses?: CustomerAddress[];

    @HasMany(() => Order)
    public orders?: Order[];
}
