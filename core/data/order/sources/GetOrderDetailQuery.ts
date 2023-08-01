import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import Get from 'api/get';
import {AxiosError} from 'axios';
import {DataObj, Response} from 'core/domain/vo/BaseResponse';

import {GetOrderResponse} from '../types';

export const GetOrderDetailKey = 'Orders/list';

export const GetOrderDetail = async (
	transaction_uuid: string,
): Promise<Response<DataObj<GetOrderResponse>>> => {
	try {
		const response = await Get({
			endpoint: `/api/fnb-order-service/menu/order/get-list`,
			headers: {
				'X-Transaction-Uuid': transaction_uuid,
			},
		});

		return response;
	} catch (error) {
		const err = error as AxiosError;
		throw err.response?.data;
	}
};

export const useGetOrdersQuery = (
	transaction_uuid: string,
	options?: UseQueryOptions<Response<DataObj<GetOrderResponse>>>,
) =>
	useQuery<Response<DataObj<GetOrderResponse>>>(
		[GetOrderDetailKey, JSON.stringify(transaction_uuid)],
		() => GetOrderDetail(transaction_uuid),
		{
			refetchOnWindowFocus: false,
			...options,
		},
	);
