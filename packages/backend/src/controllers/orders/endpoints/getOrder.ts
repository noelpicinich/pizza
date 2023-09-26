import Order from "@models/Order.model";
import Pizza from "@models/Pizza.model";
import Topping from "@models/Topping.model";
import { NotFoundError } from "routing-controllers";
import { GetOrder } from "shared/types/api/orders/GetOrder";


export default async function getOrder(orderId: number): Promise<GetOrder.Response> {

    const order = await Order.findOne({
        where: {
            id: orderId
        },
        include: [
            {
                model: Pizza,
                include: [
                    {
                        model: Topping
                    }
                ]
            }
        ]
    });

    if (!order) {
        throw new NotFoundError("Order not found");
    }

    return {
        data: order.formatForAPI()
    }
}