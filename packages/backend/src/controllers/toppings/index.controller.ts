import { Get, JsonController, QueryParams } from 'routing-controllers';
import { ListToppings } from 'shared/types/api/toppings/ListToppings';
import listToppings from './endpoints/listToppings';
import { ListToppingsParams } from './validation';

@JsonController('/toppings')
export default class ToppingsController {
    @Get('/')
    async _listToppings(
        @QueryParams() params: ListToppingsParams
    ): Promise<ListToppings.Response> {
        return listToppings(params);
    }
}
