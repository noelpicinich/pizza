import { FindOptions, Order } from 'sequelize';
import IApiPaginationParams from 'shared/types/api/IApiPaginationParams';
import { DEFAULT_PAGE_SIZE } from './constants/Global.constant';

export default function (params: IApiPaginationParams<any>): {
    options: FindOptions;
    page: number;
    pageSize: number;
    query?: string;
} {
    const {
        page = 0,
        pageSize = DEFAULT_PAGE_SIZE,
        sortBy,
        sortDirection = 'asc',
        query
    } = params;

    let order: Order | undefined;

    if (sortBy) {
        order = [[sortBy, sortDirection]];
    }

    return {
        options: {
            order,
            limit: pageSize,
            offset: page * pageSize
        },
        page,
        pageSize,
        query
    };
}
