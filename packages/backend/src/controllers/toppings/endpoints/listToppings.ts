import Topping from '@models/Topping.model';
import { Op } from 'sequelize';
import { ListToppings } from 'shared/types/api/toppings/ListToppings';
import parseListParams from '../../../lib/parseListParams';

export default async function listToppings(
    params: ListToppings.Params
): Promise<ListToppings.Response> {
    const { page, pageSize, query, options } = parseListParams(params);
    console.log(params)
    console.log(options)
    if (query) {
        options.where = {
            name: {
                [Op.like]: `%${query}%`
            }
        };
    }

    const { count: total, rows: toppings } = await Topping.findAndCountAll(options);

    const rows = toppings.map(topping => topping.formatForAPI());
    
    return {
        data: {
            page,
            pageSize,
            rows,
            total
        }
    };
}
