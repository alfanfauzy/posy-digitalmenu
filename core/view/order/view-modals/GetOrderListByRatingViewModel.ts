import {UseQueryOptions} from '@tanstack/react-query';
import {GetOrderListByRatingResponse} from 'core/data/order/types/GetOrderListByRatingType';
import {useGetOrderListByRatingUsecase} from 'core/data/order/usecases/GetOrderListByRatingUsecase';
import {GetOrderListByRatingResult} from 'core/domain/order/repositories/GetOrderListByRatingRepository';
import {Response} from 'core/domain/vo/BaseResponse';

export const useGetOrderListByRatingViewModel = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<GetOrderListByRatingResponse>>,
): GetOrderListByRatingResult => {
	const result = useGetOrderListByRatingUsecase(transaction_uuid, options);

	return result;
};
