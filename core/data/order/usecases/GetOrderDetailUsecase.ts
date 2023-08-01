import {UseQueryOptions} from '@tanstack/react-query';
import {GetOrdersResult} from 'core/domain/order/repositories/GetOrderDetailRepository';
import {DataObj, Response} from 'core/domain/vo/BaseResponse';

import {mapToOrdersModel} from '../mappers/OrderMapper';
import {useGetOrdersQuery} from '../sources/GetOrderDetailQuery';
import {GetOrderResponse} from '../types';

export const useGetOrdersUsecase = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<DataObj<GetOrderResponse>>>,
): GetOrdersResult => {
	const {data, ...rest} = useGetOrdersQuery(transaction_uuid, options);

	if (data?.data?.objs) {
		const dataMapper = mapToOrdersModel(data.data.objs);

		return {
			data: dataMapper,
			...rest,
		};
	}

	return {
		data: undefined,
		...rest,
	};
};
