import {UseQueryOptions} from '@tanstack/react-query';
import {GetOrderListByRatingResult} from 'core/domain/order/repositories/GetOrderListByRatingRepository';
import {Response} from 'core/domain/vo/BaseResponse';

import {mapToOrderListByRatingModel} from '../mappers/OrderMapper';
import {useGetOrderListByRatingQuery} from '../sources/GetOrderListByRatingQuery';
import {GetOrderListByRatingResponse} from '../types/GetOrderListByRatingType';

export const useGetOrderListByRatingUsecase = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<GetOrderListByRatingResponse>>,
): GetOrderListByRatingResult => {
	const {data, ...rest} = useGetOrderListByRatingQuery(transaction_uuid, options);

	if (data?.data) {
		const dataMapper = mapToOrderListByRatingModel(data.data);

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
