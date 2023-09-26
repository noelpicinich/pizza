import OrderStatus from "../enums/OrderStatus";
import IPizza from "./IPizza";

export default interface IOrder {
    id: number;
    customerId: number | null;
    paymentId: number | null;
    status: OrderStatus;
    isDelivery: boolean;
    deliveryAddressId: number | null;
    createdAt: Date | string;
    completedAt: Date | string | null;
    cancelledAt: Date | string | null;
    pizzas?: IPizza[];
}