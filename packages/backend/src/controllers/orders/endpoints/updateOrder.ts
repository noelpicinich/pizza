import Order from "@models/Order.model";
import { InternalServerError, NotFoundError } from "routing-controllers";
import { UpdateOrder } from "shared/types/api/orders/UpdateOrder";
import OrderStatus from "shared/types/enums/OrderStatus";


export default async function updateOrder(orderId: number, body: UpdateOrder.Request): Promise<UpdateOrder.Response> {
    const order = await Order.findByPk(orderId);

    if (!order) {
        throw new NotFoundError("Order not found.");
    }

    const { status } = body;

    order.status = status;

    if (status === OrderStatus.CANCELLED) {
        // If payments were implemented, I'd probably make a separate endpoint for cancellation to house refund logic
        order.cancelledAt = new Date();
    } else if (status === OrderStatus.COMPLETE) {
        order.completedAt = new Date();
    }

    try {
        await order.save();

        return {
            message: "Order updated successfully!",
            data: order.formatForAPI()
        }
    } catch(err) {
        console.error("Failed to update order", err);
        throw new InternalServerError("Failed to update order.");
    }
}