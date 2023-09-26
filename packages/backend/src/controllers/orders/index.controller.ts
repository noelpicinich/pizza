import { Body, Get, JsonController, Param, Patch, Post, QueryParams } from "routing-controllers";

import { CreateOrder } from "shared/types/api/orders/CreateOrder";
import { ListOrders } from "shared/types/api/orders/ListOrders";
import { GetOrder } from "shared/types/api/orders/GetOrder";
import { UpdateOrder } from "shared/types/api/orders/UpdateOrder";

import createOrder from "./endpoints/createOrder";
import listOrders from "./endpoints/listOrders";
import getOrder from "./endpoints/getOrder";
import updateOrder from "./endpoints/updateOrder";

import { CreateOrderRequest, UpdateOrderRequest } from "./validation";


@JsonController('/orders')
export default class OrderController {

    @Post("/")
    async _createOrder(
        @Body() body: CreateOrderRequest
    ): Promise<CreateOrder.Response> {
        return createOrder(body);
    }

    @Get("/")
    async _listOrders(
        @QueryParams() params: ListOrders.Params
    ): Promise<ListOrders.Response> {
        return listOrders(params);
    }

    @Get("/:orderId")
    async _getOrder(
        @Param('orderId') orderId: number
    ): Promise<GetOrder.Response> {
        return getOrder(orderId);
    }

    @Patch("/:orderId")
    async _updateOrder(
        @Param('orderId') orderId: number,
        @Body() body: UpdateOrderRequest
    ): Promise<UpdateOrder.Response> {
        return updateOrder(orderId, body);
    }
}