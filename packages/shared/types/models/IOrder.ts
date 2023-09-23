import OrderStatus from "../enums/OrderStatus";

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
}