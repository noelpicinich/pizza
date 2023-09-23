import { CreationOptional, InferCreationAttributes } from 'sequelize';
import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, CreatedAt, UpdatedAt, BelongsTo, ForeignKey } from 'sequelize-typescript';
import ICustomerAddress from 'shared/types/models/ICustomerAddress';
import Customer from './Customer.model';

@Table({
    tableName: 'customer_addresses',
    underscored: true,
    timestamps: true,
    updatedAt: false
})
export default class CustomerAddress extends Model<ICustomerAddress, InferCreationAttributes<CustomerAddress>> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER.UNSIGNED
    })  
    public id: CreationOptional<number>;

    @ForeignKey(() => Customer)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER.UNSIGNED
    })  
    public customerId: number;

    @Column({
        type: DataType.STRING(50)
    })
    public nickname: string | null;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(255)
    })
    public streetAddress1: string;

    @Column({
        type: DataType.STRING(255)
    })
    public streetAddress2: string | null;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100)
    })
    public city: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(2)
    })
    public state: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    public zipCode: string;

    @CreatedAt
    @AllowNull(false)
    @Column({
        type: 'TIMESTAMP'
    })
    public createdAt: CreationOptional<Date | string>;

    @BelongsTo(() => Customer)
    public customer: Customer;
}
