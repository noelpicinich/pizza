import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEmail, IsEnum, IsIn, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateOrder } from "shared/types/api/orders/CreateOrder";
import { ListOrders } from "shared/types/api/orders/ListOrders";
import PizzaHalf from "shared/types/enums/PizzaHalf";
import PizzaSize from "shared/types/enums/PizzaSize";
import { GlobalPaginationParams } from "../validation";
import { ListToppings } from "shared/types/api/toppings/ListToppings";
import OrderStatus from "shared/types/enums/OrderStatus";
import { UpdateOrder } from "shared/types/api/orders/UpdateOrder";


export class CreateOrderRequest implements CreateOrder.Request {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PizzaOrder)
    pizzas: PizzaOrder[];
}

class PizzaOrder {
    @IsNotEmpty()
    @IsEnum(PizzaSize)
    size: PizzaSize;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Topping)
    toppings: Topping[];
}

class Topping {
    @IsNotEmpty()
    @IsInt()
    toppingId: number;

    @IsOptional()
    @IsEnum(PizzaHalf)
    half?: PizzaHalf;
}

export class ListOrdersParams extends GlobalPaginationParams<ListOrders.SortByColumn> {
    @IsOptional()
    @IsString()
    @IsIn(['id', 'status', 'isDelivery', 'createdAt', 'completedAt', 'cancelledAt'])
    sortBy?: ListToppings.SortByColumn;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => OrderFilters)
    filters?: {
        isDelivery?: boolean;
        isCancelled?: boolean;
        status?: OrderStatus;
    }
}

class OrderFilters {
    @IsOptional()
    @IsBoolean()
    isDelivery?: boolean;

    @IsOptional()
    @IsBoolean()
    isCancelled?: boolean;

    @IsOptional()
    @IsEnum(OrderStatus)
    status?: OrderStatus;
}

export class UpdateOrderRequest implements UpdateOrder.Request {
    @IsNotEmpty()
    @IsEnum(OrderStatus)
    status: OrderStatus;
}