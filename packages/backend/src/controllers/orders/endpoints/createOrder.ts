import Customer from '@models/Customer.model';
import Order from '@models/Order.model';
import Pizza from '@models/Pizza.model';
import PizzaTopping from '@models/PizzaTopping.model';
import sequelize from '@models/index';
import { InternalServerError } from 'routing-controllers';
import { CreateOrder } from 'shared/types/api/orders/CreateOrder';
import OrderStatus from 'shared/types/enums/OrderStatus';
import IPizzaTopping from 'shared/types/models/IPizzaTopping';

export default async function createOrder(
    body: CreateOrder.Request
): Promise<CreateOrder.Response> {
    const { email, pizzas } = body;

    const transaction = await sequelize.transaction();

    try {
        const customer = await Customer.create({ email }, { transaction });

        const order = await Order.create(
            {
                customerId: customer.id,
                paymentId: null,
                status: OrderStatus.NOT_STARTED,
                isDelivery: false,
                deliveryAddressId: null
            },
            { transaction }
        );

        for (const pizza of pizzas) {
            let newPizza = await Pizza.create(
                {
                    orderId: order.id,
                    size: pizza.size
                },
                { transaction }
            );

            const pizzaToppings: IPizzaTopping[] = pizza.toppings.map(
                (topping) => {
                    return {
                        half: null,
                        pizzaId: newPizza.id,
                        ...topping
                    };
                }
            );

            await PizzaTopping.bulkCreate(pizzaToppings, { transaction });
        }

        await transaction.commit();

        return {
            message: 'Order placed successfully!'
        };
    } catch (err) {
        await transaction.rollback();
        console.error('Failed to place order', err);
        throw new InternalServerError('Failed to place order.');
    }
}
