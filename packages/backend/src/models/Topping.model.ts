import { CreationOptional, InferCreationAttributes } from 'sequelize';
import {
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    Default,
    BelongsToMany
} from 'sequelize-typescript';
import ToppingType from 'shared/types/enums/ToppingType';
import ITopping from 'shared/types/models/ITopping';
import PizzaTopping from './PizzaTopping.model';
import Pizza from './Pizza.model';

@Table({
    tableName: 'toppings',
    underscored: true,
    timestamps: false
})
export default class Topping extends Model<
    ITopping,
    InferCreationAttributes<Topping>
> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    public id: CreationOptional<number>;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(25)
    })
    public type: ToppingType;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(50)
    })
    public name: string;

    @AllowNull(false)
    @Column({
        type: DataType.DECIMAL
    })
    public price: number;

    @AllowNull(false)
    @Default('0')
    @Column({
        type: DataType.BOOLEAN
    })
    public disabled: boolean;

    @BelongsToMany(() => Pizza, () => PizzaTopping)
    public pizzas: Pizza[];

    public formatForAPI(): ITopping {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            price: this.price,
            disabled: this.disabled
        }
    }
}
