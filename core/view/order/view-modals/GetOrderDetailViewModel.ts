import {UseQueryOptions} from '@tanstack/react-query';
import {GetOrderResponse} from 'core/data/order/types';
import {useGetOrdersUsecase} from 'core/data/order/usecases/GetOrderDetailUsecase';
import {GetOrdersResult} from 'core/domain/order/repositories/GetOrderDetailRepository';
import {DataObj, Response} from 'core/domain/vo/BaseResponse';

export const useGetOrdersViewModel = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<DataObj<GetOrderResponse>>>,
): GetOrdersResult => {
	const result = useGetOrdersUsecase(transaction_uuid, options);

	return result;
};
