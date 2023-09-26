import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';
import IApiPaginationParams from 'shared/types/api/IApiPaginationParams';
import SortDirection from 'shared/types/other/SortDirection';

export abstract class GlobalPaginationParams<T>
    implements IApiPaginationParams<T>
{
    @IsOptional()
    @IsInt()
    page: number;

    @IsOptional()
    @IsInt()
    pageSize?: number;

    @IsOptional()
    @IsIn(['ASC', 'DESC', 'asc', 'desc'])
    sortDirection?: SortDirection;

    @IsOptional()
    @IsString()
    query?: string;
}
