import Order from '@models/Order.model';
import { Op, WhereOptions } from 'sequelize';
import { ListOrders } from 'shared/types/api/orders/ListOrders';
import parseListParams from '../../../lib/parseListParams';

export default async function listOrders(
    params: ListOrders.Params
): Promise<ListOrders.Response> {
    const { page, pageSize, options } = parseListParams(params);
    const { filters = {} } = params;

    let where: WhereOptions = {};

    if (filters.isDelivery !== undefined) {
        where.isDelivery = {
            [Op.eq]: filters.isDelivery ? 1 : 0
        }
    }

    if (filters.isCancelled !== undefined) {
        where.cancelledAt = filters.isCancelled ? {
            [Op.ne]: null
        } : {
            [Op.eq]: null
        }
    }

    if (filters.status) {
        where.status = filters.status;
    }

    const { count: total, rows: orders } = await Order.findAndCountAll({ where, ...options, logging: console.log });

    const rows = orders.map(order => order.formatForAPI());
    
    return {
        data: {
            page,
            pageSize,
            rows,
            total
        }
    };
}
