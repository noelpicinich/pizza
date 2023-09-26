import { ListToppings } from 'shared/types/api/toppings/ListToppings';
import { GlobalPaginationParams } from '../validation';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class ListToppingsParams
    extends GlobalPaginationParams<ListToppings.SortByColumn>
    implements ListToppings.Params
{
    @IsOptional()
    @IsString()
    @IsIn(['id', 'name', 'price', 'type', 'disabled'])
    sortBy?: ListToppings.SortByColumn;
}
